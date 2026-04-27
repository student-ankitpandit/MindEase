import { Router } from "express";
import z from "zod";
import { authMiddleware } from "../auth-middleware";
import { genAI, model } from "../config/geminiConfig";
import prisma from "../lib/prisma";

const router = Router();

// POST /stories — submit a peer story (AI moderated)
router.post("/", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    try {
        const storySchema = z.object({
            title: z.string().min(3).max(200),
            content: z.string().min(20).max(5000),
            category: z.enum(["academics", "career", "relationships", "personal_growth", "family", "social", "general"]).optional().default("general"),
            isAnonymous: z.boolean().optional().default(true),
        });

        const parsed = storySchema.safeParse(req.body);
        if (!parsed.success) return res.status(400).json({ success: false, message: "Validation error", errors: parsed.error.issues });

        const { title, content, category, isAnonymous } = parsed.data;

        // AI moderation
        const moderationPrompt = `You are a content moderator for a youth mental wellness platform. Review this story submission and determine if it is safe to publish.

TITLE: ${title}
CONTENT: ${content}

Check for:
1. Harmful content (self-harm instructions, violence, abuse)
2. Personal identifiers (full names, phone numbers, addresses, school names)
3. Inappropriate language or bullying
4. Content that could trigger vulnerable users without proper context

Respond in JSON only:
{
    "isApproved": true/false,
    "reason": "Brief explanation",
    "tags": ["relevant", "tags", "for", "matching"]
}`;

        const aiResponse = await genAI.models.generateContent({ model, contents: moderationPrompt });
        let moderation;
        try {
            const cleaned = (aiResponse.text || "").replace(/```json/g, "").replace(/```/g, "").trim();
            moderation = JSON.parse(cleaned);
        } catch {
            moderation = { isApproved: false, reason: "Could not verify content safety", tags: [] };
        }

        const story = await prisma.peerStory.create({
            data: {
                userId,
                title,
                content,
                category,
                isAnonymous,
                isApproved: moderation.isApproved === true,
                tags: moderation.tags || [],
            },
        });

        return res.status(201).json({
            success: true,
            message: moderation.isApproved ? "Story published successfully!" : "Story submitted for review.",
            story,
            moderation: { isApproved: moderation.isApproved, reason: moderation.reason },
        });
    } catch (error) {
        console.error("Error creating story:", error);
        return res.status(500).json({ success: false, message: "Could not submit story" });
    }
});

// GET /stories — list all approved stories
router.get("/", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    try {
        const { category, page = "1" } = req.query;
        const pageNum = Math.max(1, parseInt(page as string) || 1);
        const pageSize = 12;

        const where: any = { isApproved: true };
        if (category && category !== "all") where.category = category;

        const [stories, total] = await Promise.all([
            prisma.peerStory.findMany({
                where,
                orderBy: { createdAt: "desc" },
                skip: (pageNum - 1) * pageSize,
                take: pageSize,
                include: {
                    user: { select: { name: true } },
                    supports: { where: { userId }, select: { type: true } },
                    _count: { select: { comments: { where: { isApproved: true } } } },
                },
            }),
            prisma.peerStory.count({ where }),
        ]);

        const formatted = stories.map((s) => ({
            id: s.id,
            title: s.title,
            content: s.content,
            category: s.category,
            tags: s.tags,
            isAnonymous: s.isAnonymous,
            displayName: s.isAnonymous ? "Anonymous" : s.user.name || "User",
            supportCount: s.supportCount,
            commentCount: s._count.comments,
            userSupport: s.supports.length > 0 ? s.supports[0]?.type : null,
            createdAt: s.createdAt,
        }));

        return res.status(200).json({ success: true, stories: formatted, total, page: pageNum, pages: Math.ceil(total / pageSize) });
    } catch (error) {
        console.error("Error fetching stories:", error);
        return res.status(500).json({ success: false, message: "Could not fetch stories" });
    }
});

// GET /stories/matched — AI-matched stories relevant to user's situation
router.get("/matched", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    try {
        const recentMoods = await prisma.mood.findMany({ where: { userId }, orderBy: { createdAt: "desc" }, take: 5, select: { moodType: true, text: true } });

        if (recentMoods.length === 0) {
            // Return latest stories if no mood data
            const stories = await prisma.peerStory.findMany({
                where: { isApproved: true },
                orderBy: { supportCount: "desc" },
                take: 4,
                include: {
                    user: { select: { name: true } },
                    supports: { where: { userId }, select: { type: true } },
                    _count: { select: { comments: { where: { isApproved: true } } } },
                },
            });
            return res.status(200).json({
                success: true,
                stories: stories.map((s) => ({
                    id: s.id, title: s.title, content: s.content, category: s.category, tags: s.tags,
                    isAnonymous: s.isAnonymous, displayName: s.isAnonymous ? "Anonymous" : s.user.name || "User",
                    supportCount: s.supportCount, commentCount: s._count.comments,
                    userSupport: s.supports.length > 0 ? s.supports[0]?.type : null, createdAt: s.createdAt,
                })),
            });
        }

        // Get all approved stories
        const allStories = await prisma.peerStory.findMany({
            where: { isApproved: true },
            select: { id: true, title: true, tags: true, category: true },
            take: 50,
        });

        const moodSummary = recentMoods.map((m) => `${m.moodType}: "${m.text}"`).join("; ");
        const storyList = allStories.map((s) => `ID:${s.id} | Title:"${s.title}" | Tags:[${s.tags.join(",")}] | Category:${s.category}`).join("\n");

        const matchPrompt = `Given a user's recent moods and available peer stories, select the 4 most relevant stories that might help this user.

USER'S RECENT MOODS: ${moodSummary}

AVAILABLE STORIES:
${storyList}

Return JSON only with the IDs of the 4 best matching stories:
{ "matchedIds": ["id1", "id2", "id3", "id4"] }`;

        const aiResponse = await genAI.models.generateContent({ model, contents: matchPrompt });
        let matchedIds: string[] = [];
        try {
            const cleaned = (aiResponse.text || "").replace(/```json/g, "").replace(/```/g, "").trim();
            const parsed = JSON.parse(cleaned);
            matchedIds = parsed.matchedIds || [];
        } catch {
            matchedIds = allStories.slice(0, 4).map((s) => s.id);
        }

        const matchedStories = await prisma.peerStory.findMany({
            where: { id: { in: matchedIds }, isApproved: true },
            include: {
                user: { select: { name: true } },
                supports: { where: { userId }, select: { type: true } },
                _count: { select: { comments: { where: { isApproved: true } } } },
            },
        });

        return res.status(200).json({
            success: true,
            stories: matchedStories.map((s) => ({
                id: s.id, title: s.title, content: s.content, category: s.category, tags: s.tags,
                isAnonymous: s.isAnonymous, displayName: s.isAnonymous ? "Anonymous" : s.user.name || "User",
                supportCount: s.supportCount, commentCount: s._count.comments,
                userSupport: s.supports.length > 0 ? s.supports[0]?.type : null, createdAt: s.createdAt,
            })),
        });
    } catch (error) {
        console.error("Error matching stories:", error);
        return res.status(500).json({ success: false, message: "Could not match stories" });
    }
});

// GET /stories/mine — user's own stories
router.get("/mine", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });
    try {
        const stories = await prisma.peerStory.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
            include: { _count: { select: { supports: true, comments: { where: { isApproved: true } } } } },
        });
        return res.status(200).json({
            success: true,
            stories: stories.map((s) => ({
                id: s.id, title: s.title, content: s.content, category: s.category, tags: s.tags,
                isAnonymous: s.isAnonymous, isApproved: s.isApproved, supportCount: s.supportCount,
                commentCount: s._count.comments, createdAt: s.createdAt,
            })),
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Could not fetch your stories" });
    }
});

// POST /stories/:id/support — add a support reaction
router.post("/:id/support", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const supportSchema = z.object({ type: z.enum(["heart", "strength", "hug"]).optional().default("heart") });
    const parsed = supportSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ success: false, message: "Invalid support type" });

    try {
        const storyId = req.params.id as string;
        const existing = await prisma.storySupport.findUnique({ where: { userId_storyId: { userId, storyId } } });

        if (existing) {
            // Remove support (toggle off)
            await prisma.storySupport.delete({ where: { id: existing.id } });
            await prisma.peerStory.update({ where: { id: storyId }, data: { supportCount: { decrement: 1 } } });
            return res.status(200).json({ success: true, message: "Support removed", supported: false });
        }

        await prisma.storySupport.create({ data: { userId, storyId, type: parsed.data.type } });
        await prisma.peerStory.update({ where: { id: storyId }, data: { supportCount: { increment: 1 } } });
        return res.status(200).json({ success: true, message: "Support added!", supported: true, type: parsed.data.type });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Could not update support" });
    }
});

// GET /stories/:id/comments — get comments for a story
router.get("/:id/comments", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });
    try {
        const comments = await prisma.storyComment.findMany({
            where: { storyId: req.params.id, isApproved: true },
            orderBy: { createdAt: "asc" },
            include: { user: { select: { name: true } } },
        });

        return res.status(200).json({
            success: true,
            comments: comments.map((c) => ({
                id: c.id, content: c.content, displayName: c.user.name || "Anonymous", createdAt: c.createdAt, isOwn: c.userId === userId,
            })),
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Could not fetch comments" });
    }
});

// POST /stories/:id/comments — add a comment (AI moderated)
router.post("/:id/comments", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const commentSchema = z.object({ content: z.string().min(2).max(1000) });
    const parsed = commentSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ success: false, message: "Comment must be 2-1000 characters" });

    try {
        // AI moderation for comments
        const modPrompt = `You are a content moderator. Is this comment safe and supportive for a youth mental wellness community? 
Comment: "${parsed.data.content}"
Respond JSON only: { "isApproved": true/false, "reason": "brief reason" }`;

        const aiRes = await genAI.models.generateContent({ model, contents: modPrompt });
        let moderation;
        try {
            const cleaned = (aiRes.text || "").replace(/```json/g, "").replace(/```/g, "").trim();
            moderation = JSON.parse(cleaned);
        } catch {
            moderation = { isApproved: true, reason: "Auto-approved" };
        }

        const comment = await prisma.storyComment.create({
            data: { userId, storyId: req.params.id as string, content: parsed.data.content, isApproved: moderation.isApproved === true },
            include: { user: { select: { name: true } } },
        });

        return res.status(201).json({
            success: true,
            message: moderation.isApproved ? "Comment posted!" : "Comment submitted for review.",
            comment: { id: comment.id, content: comment.content, displayName: comment.user.name || "Anonymous", createdAt: comment.createdAt, isOwn: true },
            isApproved: moderation.isApproved,
        });
    } catch (error) {
        console.error("Error posting comment:", error);
        return res.status(500).json({ success: false, message: "Could not post comment" });
    }
});

// DELETE /stories/:id — delete own story
router.delete("/:id", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });
    try {
        const story = await prisma.peerStory.findFirst({ where: { id: req.params.id, userId } });
        if (!story) return res.status(404).json({ success: false, message: "Story not found" });
        await prisma.peerStory.delete({ where: { id: req.params.id } });
        return res.status(200).json({ success: true, message: "Story deleted" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Could not delete story" });
    }
});

export default router;

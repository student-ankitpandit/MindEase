import { Router } from "express";
import z from "zod";
import prisma from "../lib/prisma";
import { authMiddleware } from "../auth-middleware";
import { genAI, model } from "../config/geminiConfig";

const router = Router();

// POST /startJournaling — create a new journal entry
router.post("/", authMiddleware, async (req, res) => {
    try {
        const journalingSchema = z.object({
            title: z.string().optional(),
            content: z.string().min(10, { message: "Content should be at least 10 characters long" }),
            isPrivate: z.boolean().optional().default(true),
            moodType: z.enum([
                "Happy", "Sad", "Anxious", "Excited", "Angry",
                "Calm", "Stressed", "Neutral", "Grateful", "Lonely",
            ]).optional(),
            moodScore: z.number().min(1).max(10).optional(),
            tags: z.array(z.string()).optional(),
        });

        const result = journalingSchema.safeParse(req.body);

        if (!result.success) {
            console.log("Validation Error:", result.error.issues);
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                errors: result.error.issues,
            });
        }

        const userId = req.userId;
        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const { title, content, isPrivate, moodType, moodScore, tags } = result.data;
        const dbMoodType = moodType ? (moodType.toUpperCase() as any) : undefined;

        const newEntry = await prisma.journaling.create({
            data: {
                title,
                content,
                isPrivate,
                userId,
                moodType: dbMoodType,
                moodScore,
                tags: tags || [],
            },
        });

        return res.status(201).json({
            success: true,
            message: "Journal entry created successfully",
            journal: newEntry,
        });
    } catch (error) {
        console.error("Error creating journal entry:", error);
        return res.status(500).json({
            success: false,
            message: "Could not create journal entry",
            error: error instanceof Error ? error.message : error,
        });
    }
});

// GET /startJournaling — get all journals for the authenticated user
router.get("/", authMiddleware, async (req, res) => {
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const { filter } = req.query; // "all" | "private" | "shared"

        const where: any = { userId };
        if (filter === "private") {
            where.isPrivate = true;
        } else if (filter === "shared") {
            where.isPrivate = false;
        }

        const entries = await prisma.journaling.findMany({
            where,
            orderBy: { createdAt: "desc" },
        });

        return res.status(200).json({
            success: true,
            message: "Journal entries fetched successfully",
            entries,
        });
    } catch (error) {
        console.error("Error fetching journal entries:", error);
        return res.status(500).json({
            success: false,
            message: "Could not fetch journal entries",
            error: error instanceof Error ? error.message : error,
        });
    }
});

// GET /startJournaling/:id — get a single journal entry
router.get("/:id", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const journalId = req.params.id;

    if (!userId) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const entry = await prisma.journaling.findFirst({
            where: { id: journalId, userId },
        });

        if (!entry) {
            return res.status(404).json({ success: false, message: "Journal entry not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Journal entry fetched successfully",
            journal: entry,
        });
    } catch (error) {
        console.error("Error fetching journal entry:", error);
        return res.status(500).json({
            success: false,
            message: "Could not fetch journal entry",
            error: error instanceof Error ? error.message : error,
        });
    }
});

// PUT /startJournaling/:id — update a journal entry
router.put("/:id", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const journalId = req.params.id;

    if (!userId) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const updateSchema = z.object({
            title: z.string().optional(),
            content: z.string().min(10, { message: "Content should be at least 10 characters long" }).optional(),
            isPrivate: z.boolean().optional(),
            moodType: z.enum([
                "Happy", "Sad", "Anxious", "Excited", "Angry",
                "Calm", "Stressed", "Neutral", "Grateful", "Lonely",
            ]).optional(),
            moodScore: z.number().min(1).max(10).optional(),
            tags: z.array(z.string()).optional(),
        });

        const result = updateSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Validation Error",
                errors: result.error.issues,
            });
        }

        // Verify ownership
        const existing = await prisma.journaling.findFirst({
            where: { id: journalId, userId },
        });

        if (!existing) {
            return res.status(404).json({ success: false, message: "Journal entry not found" });
        }

        const { title, content, isPrivate, moodType, moodScore, tags } = result.data;
        const dbMoodType = moodType ? (moodType.toUpperCase() as any) : undefined;

        const updated = await prisma.journaling.update({
            where: { id: journalId },
            data: {
                ...(title !== undefined && { title }),
                ...(content !== undefined && { content }),
                ...(isPrivate !== undefined && { isPrivate }),
                ...(dbMoodType !== undefined && { moodType: dbMoodType }),
                ...(moodScore !== undefined && { moodScore }),
                ...(tags !== undefined && { tags }),
            },
        });

        return res.status(200).json({
            success: true,
            message: "Journal entry updated successfully",
            journal: updated,
        });
    } catch (error) {
        console.error("Error updating journal entry:", error);
        return res.status(500).json({
            success: false,
            message: "Could not update journal entry",
            error: error instanceof Error ? error.message : error,
        });
    }
});

// DELETE /startJournaling/:id — delete a journal entry
router.delete("/:id", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const journalId = req.params.id;

    if (!userId) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const existing = await prisma.journaling.findFirst({
            where: { id: journalId, userId },
        });

        if (!existing) {
            return res.status(404).json({ success: false, message: "Journal entry not found" });
        }

        await prisma.journaling.delete({ where: { id: journalId } });

        return res.status(200).json({
            success: true,
            message: "Journal entry deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting journal entry:", error);
        return res.status(500).json({
            success: false,
            message: "Could not delete journal entry",
            error: error instanceof Error ? error.message : error,
        });
    }
});

// POST /startJournaling/:id/analyze — AI mood analysis for a journal entry
router.post("/:id/analyze", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const journalId = req.params.id;

    if (!userId) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const entry = await prisma.journaling.findFirst({
            where: { id: journalId, userId },
        });

        if (!entry) {
            return res.status(404).json({ success: false, message: "Journal entry not found" });
        }

        const prompt = `Analyze the following journal entry and provide:
        1. The detected mood (one of: HAPPY, SAD, ANXIOUS, EXCITED, ANGRY, CALM, STRESSED, NEUTRAL, GRATEFUL, LONELY)
        2. A mood score from 1-10 (1 = very negative, 10 = very positive)
        3. Key themes or emotional patterns detected
        4. A brief supportive reflection

        Journal Title: "${entry.title || "Untitled"}"
        Journal Content: "${entry.content}"

        Response format (JSON only):
        {
            "moodType": "string",
            "moodScore": number,
            "themes": ["string"],
            "reflection": "string"
        }`;

        const response = await genAI.models.generateContent({
            model: model,
            contents: prompt,
        });

        const responseText = response.text;
        let analysis;

        try {
            const cleaned = (responseText || "")
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .replace(/\*\*/g, "")
                .trim();
            analysis = JSON.parse(cleaned);
        } catch (e) {
            console.error("Failed to parse AI response:", e);
            return res.status(500).json({
                success: false,
                message: "Failed to parse AI analysis",
            });
        }

        // Update the journal entry with the analyzed mood
        const updated = await prisma.journaling.update({
            where: { id: journalId },
            data: {
                moodType: analysis.moodType as any,
                moodScore: Math.min(10, Math.max(1, analysis.moodScore)),
                tags: analysis.themes || [],
            },
        });

        return res.status(200).json({
            success: true,
            message: "Journal analyzed successfully",
            analysis: {
                moodType: analysis.moodType,
                moodScore: analysis.moodScore,
                themes: analysis.themes,
                reflection: analysis.reflection,
            },
            journal: updated,
        });
    } catch (error) {
        console.error("Error analyzing journal:", error);
        return res.status(500).json({
            success: false,
            message: "Could not analyze journal entry",
            error: error instanceof Error ? error.message : error,
        });
    }
});

export default router;
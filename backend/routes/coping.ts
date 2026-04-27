import { Router } from "express";
import z from "zod";
import { authMiddleware } from "../auth-middleware";
import { genAI, model } from "../config/geminiConfig";
import prisma from "../lib/prisma";

const router = Router();

// POST /coping/generate — AI-generated personalized coping strategies with adaptive difficulty
router.post("/generate", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    try {
        const generateSchema = z.object({
            situation: z.string().min(5, "Please describe your situation in at least 5 characters"),
            category: z.enum(["academics", "career", "relationships", "personal_growth", "family", "social", "general"]).optional().default("general"),
        });

        const result = generateSchema.safeParse(req.body);
        if (!result.success) return res.status(400).json({ success: false, message: "Validation error", errors: result.error.issues });

        const { situation, category } = result.data;

        // Fetch recent moods + completed strategies for adaptive difficulty
        const [recentMoods, completedStrategies] = await Promise.all([
            prisma.mood.findMany({ where: { userId }, orderBy: { createdAt: "desc" }, take: 5, select: { moodType: true, text: true } }),
            prisma.copingStrategy.findMany({ where: { userId, completedCount: { gt: 0 } }, select: { difficulty: true, practiceType: true, completedCount: true, rating: true } }),
        ]);

        const moodContext = recentMoods.length > 0
            ? `Recent mood history: ${recentMoods.map((m) => `${m.moodType} - "${m.text}"`).join("; ")}`
            : "No recent mood history available.";

        // Determine adaptive difficulty
        const totalCompleted = completedStrategies.reduce((sum, s) => sum + s.completedCount, 0);
        let suggestedDifficulty = "beginner";
        if (totalCompleted >= 15) suggestedDifficulty = "advanced";
        else if (totalCompleted >= 5) suggestedDifficulty = "intermediate";

        const avgRating = completedStrategies.filter((s) => s.rating).length > 0
            ? completedStrategies.filter((s) => s.rating).reduce((sum, s) => sum + (s.rating || 0), 0) / completedStrategies.filter((s) => s.rating).length
            : null;

        const ratingContext = avgRating ? `User's average strategy rating is ${avgRating.toFixed(1)}/5. Adjust recommendations accordingly.` : "";

        const prompt = `You are a mental wellness expert specializing in youth well-being, with deep knowledge of both modern psychology and Indian cultural wellness practices.

USER SITUATION: ${situation}
CATEGORY: ${category}
${moodContext}
USER PROGRESS: ${totalCompleted} strategies completed so far. Suggested difficulty: ${suggestedDifficulty}. ${ratingContext}

Generate 3 personalized, evidence-based coping strategies. Mix modern techniques with Indian wellness practices naturally.

Requirements:
- Each strategy should have clear step-by-step instructions (3-5 steps)
- Include estimated duration in minutes
- Assign a practiceType: "breathing" (pranayama etc), "meditation" (dhyana, mindfulness), "yoga" (asanas), "cbt" (cognitive behavioral), "journaling", "grounding", "habit", or "general"
- If a practice has Indian/cultural roots, add a brief culturalNote explaining its origin (e.g. "Rooted in ancient pranayama techniques from Indian yoga tradition")
- Difficulty should be "${suggestedDifficulty}" level
- Make strategies practical for young adults (15-25)

Response format (JSON only):
{
    "strategies": [
        {
            "title": "Short descriptive title",
            "description": "2-3 sentence overview",
            "category": "${category}",
            "practiceType": "breathing|meditation|yoga|cbt|journaling|grounding|habit|general",
            "steps": ["Step 1...", "Step 2...", "Step 3..."],
            "duration": 10,
            "difficulty": "${suggestedDifficulty}",
            "culturalNote": "Optional note about cultural roots, or null"
        }
    ]
}`;

        const response = await genAI.models.generateContent({ model, contents: prompt });
        let strategies;
        try {
            const cleaned = (response.text || "").replace(/```json/g, "").replace(/```/g, "").replace(/\*\*/g, "").trim();
            strategies = JSON.parse(cleaned);
        } catch (e) {
            console.error("Failed to parse AI response:", e);
            return res.status(500).json({ success: false, message: "Failed to parse AI response" });
        }

        const savedStrategies = await Promise.all(
            strategies.strategies.map((s: any) =>
                prisma.copingStrategy.create({
                    data: {
                        userId,
                        category: s.category || category,
                        title: s.title,
                        description: s.description,
                        practiceType: s.practiceType || "general",
                        steps: s.steps || [],
                        duration: s.duration || 10,
                        difficulty: s.difficulty || suggestedDifficulty,
                        culturalNote: s.culturalNote || null,
                        isSaved: false,
                    },
                })
            )
        );

        return res.status(200).json({ success: true, message: "Coping strategies generated successfully", strategies: savedStrategies });
    } catch (error) {
        console.error("Error generating coping strategies:", error);
        return res.status(500).json({ success: false, message: "Failed to generate coping strategies.", error: error instanceof Error ? error.message : error });
    }
});

// GET /coping — get all coping strategies for the user
router.get("/", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    try {
        const { saved, practiceType } = req.query;
        const where: any = { userId };
        if (saved === "true") where.isSaved = true;
        if (practiceType && practiceType !== "all") where.practiceType = practiceType;

        const strategies = await prisma.copingStrategy.findMany({ where, orderBy: { createdAt: "desc" } });

        // Calculate progress stats
        const allStrategies = await prisma.copingStrategy.findMany({ where: { userId }, select: { completedCount: true, difficulty: true } });
        const totalCompleted = allStrategies.reduce((sum, s) => sum + s.completedCount, 0);
        let currentLevel = "beginner";
        if (totalCompleted >= 15) currentLevel = "advanced";
        else if (totalCompleted >= 5) currentLevel = "intermediate";

        return res.status(200).json({
            success: true, strategies,
            progress: { totalCompleted, currentLevel, totalStrategies: allStrategies.length },
        });
    } catch (error) {
        console.error("Error fetching coping strategies:", error);
        return res.status(500).json({ success: false, message: "Could not fetch coping strategies" });
    }
});

// POST /coping/:id/save — toggle bookmark
router.post("/:id/save", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });
    try {
        const strategy = await prisma.copingStrategy.findFirst({ where: { id: req.params.id, userId } });
        if (!strategy) return res.status(404).json({ success: false, message: "Strategy not found" });
        const updated = await prisma.copingStrategy.update({ where: { id: req.params.id }, data: { isSaved: !strategy.isSaved } });
        return res.status(200).json({ success: true, message: updated.isSaved ? "Strategy saved!" : "Strategy unsaved", strategy: updated });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Could not save strategy" });
    }
});

// POST /coping/:id/complete — mark strategy as completed
router.post("/:id/complete", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });
    try {
        const strategy = await prisma.copingStrategy.findFirst({ where: { id: req.params.id, userId } });
        if (!strategy) return res.status(404).json({ success: false, message: "Strategy not found" });
        const updated = await prisma.copingStrategy.update({ where: { id: req.params.id }, data: { completedCount: strategy.completedCount + 1 } });
        return res.status(200).json({ success: true, message: "Strategy marked as completed!", strategy: updated });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Could not update strategy" });
    }
});

// POST /coping/:id/rate — rate a strategy 1-5
router.post("/:id/rate", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });
    const ratingSchema = z.object({ rating: z.number().min(1).max(5) });
    const parsed = ratingSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ success: false, message: "Rating must be 1-5" });
    try {
        const strategy = await prisma.copingStrategy.findFirst({ where: { id: req.params.id, userId } });
        if (!strategy) return res.status(404).json({ success: false, message: "Strategy not found" });
        const updated = await prisma.copingStrategy.update({ where: { id: req.params.id }, data: { rating: parsed.data.rating } });
        return res.status(200).json({ success: true, message: "Rating saved!", strategy: updated });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Could not rate strategy" });
    }
});

// DELETE /coping/:id — delete a strategy
router.delete("/:id", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });
    try {
        const strategy = await prisma.copingStrategy.findFirst({ where: { id: req.params.id, userId } });
        if (!strategy) return res.status(404).json({ success: false, message: "Strategy not found" });
        await prisma.copingStrategy.delete({ where: { id: req.params.id } });
        return res.status(200).json({ success: true, message: "Strategy deleted successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Could not delete strategy" });
    }
});

export default router;

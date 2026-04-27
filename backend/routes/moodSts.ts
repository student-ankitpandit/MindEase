import { Router } from "express";
import z from "zod";
import prisma from "../lib/prisma";
import { model, genAI } from "../config/geminiConfig";
import { authMiddleware } from "../auth-middleware";

const router = Router();

// POST /moodSts/moodStatus — submit a mood entry with AI analysis
router.post("/moodStatus", authMiddleware, async (req, res) => {
    try {
        const moodSchema = z.object({
            text: z.string().min(3, "Please describe your day"),
        });

        const result = moodSchema.safeParse(req.body);

        if (!result.success) {
            const flattenErrors = result.error.flatten();
            return res.status(400).json({ success: false, errors: flattenErrors });
        }

        const { text } = result.data;
        const userId = req.userId;

        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const prompt = `Analyze the following text and return:
        1: The mood type (happy, sad, stressed, angry, neutral, anxious, excited, calm, grateful, lonely)
        2: One short actionable advice for the user to improve or maintain their well-being.
        Text: "${text}"

        Response format (JSON only):
        { "moodType": "string", "advice": "string" }`;

        const response = await genAI.models.generateContent({ model, contents: prompt });
        const resText = response.text;
        let moodResult;

        try {
            const cleanedText = (resText || "").replace(/```json/g, "").replace(/```/g, "").trim();
            moodResult = JSON.parse(cleanedText);
        } catch (e) {
            console.error("Failed to parse AI response:", e);
            return res.status(500).json({ success: false, message: "Failed to parse AI response" });
        }

        const mood = await prisma.mood.create({
            data: {
                userId,
                text,
                moodType: moodResult.moodType || "unknown",
            },
        });

        return res.status(201).json({
            success: true,
            mood: moodResult.moodType,
            advice: moodResult.advice,
            saved: mood,
            message: "Mood status saved successfully",
        });
    } catch (e) {
        console.error("Error:", e);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while saving your mood status",
            error: e instanceof Error ? e.message : e,
        });
    }
});

// DELETE /moodSts/:id — delete a mood entry
router.delete("/:id", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const moodId = req.params.id;

    if (!userId) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const mood = await prisma.mood.findFirst({ where: { id: moodId, userId } });

        if (!mood) {
            return res.status(404).json({ success: false, message: "Mood entry not found" });
        }

        await prisma.mood.delete({ where: { id: moodId } });

        return res.status(200).json({ success: true, message: "Mood entry deleted successfully" });
    } catch (e) {
        console.error("Error deleting mood:", e);
        return res.status(500).json({ success: false, message: "Could not delete mood entry" });
    }
});

export default router;
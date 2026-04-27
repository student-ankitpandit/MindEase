import { Router } from "express";
import prisma from "../lib/prisma";
import { authMiddleware } from "../auth-middleware";

const router = Router();

// GET /getMoodSts/getMoodStatus — get mood history for authenticated user
router.get("/getMoodStatus", authMiddleware, async (req, res) => {
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const moods = await prisma.mood.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
        });

        return res.status(200).json({
            success: true,
            message: "Mood statuses fetched successfully",
            moods,
        });
    } catch (e) {
        console.error("Error:", e);
        return res.status(500).json({
            success: false,
            message: "Could not fetch mood statuses",
            error: e instanceof Error ? e.message : e,
        });
    }
});

// GET /getMoodSts/getMoodStatus/:userId — backward-compatible endpoint
router.get("/getMoodStatus/:userId", async (req, res) => {
    try {
        const { userId } = req.params;

        const moods = await prisma.mood.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
        });

        return res.status(200).json({
            success: true,
            message: "Mood statuses fetched successfully",
            moods,
        });
    } catch (e) {
        console.error("Error:", e);
        return res.status(500).json({
            success: false,
            message: "Could not fetch mood statuses",
            error: e instanceof Error ? e.message : e,
        });
    }
});

// GET /getMoodSts/analytics — mood trends and analytics
router.get("/analytics", authMiddleware, async (req, res) => {
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

        const [totalMoods, weeklyMoods, monthlyDistribution, allMoods] = await Promise.all([
            prisma.mood.count({ where: { userId } }),
            prisma.mood.findMany({
                where: { userId, createdAt: { gte: sevenDaysAgo } },
                orderBy: { createdAt: "asc" },
                select: { moodType: true, createdAt: true },
            }),
            prisma.mood.groupBy({
                by: ["moodType"],
                where: { userId, createdAt: { gte: thirtyDaysAgo } },
                _count: { moodType: true },
                orderBy: { _count: { moodType: "desc" } },
            }),
            prisma.mood.findMany({
                where: { userId },
                orderBy: { createdAt: "desc" },
                take: 30,
                select: { moodType: true, createdAt: true },
            }),
        ]);

        // Most frequent mood
        const mostFrequent = monthlyDistribution.length > 0
            ? monthlyDistribution[0]!.moodType
            : "none";

        // Weekly trend grouped by date
        const weeklyTrend: Record<string, string[]> = {};
        weeklyMoods.forEach((m) => {
            const dateKey = m.createdAt.toISOString().split("T")[0]!;
            if (!weeklyTrend[dateKey]) weeklyTrend[dateKey] = [];
            weeklyTrend[dateKey]!.push(m.moodType);
        });

        // Streak: consecutive days with mood entries
        let streak = 0;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        for (let i = 0; i < 30; i++) {
            const checkDate = new Date(today);
            checkDate.setDate(checkDate.getDate() - i);
            const dateStr = checkDate.toISOString().split("T")[0];
            const hasMood = allMoods.some(
                (m) => m.createdAt.toISOString().split("T")[0] === dateStr
            );
            if (hasMood) {
                streak++;
            } else {
                break;
            }
        }

        return res.status(200).json({
            success: true,
            message: "Mood analytics fetched successfully",
            analytics: {
                totalMoods,
                mostFrequentMood: mostFrequent,
                streak,
                monthlyDistribution: monthlyDistribution.map((m) => ({
                    mood: m.moodType,
                    count: m._count.moodType,
                })),
                weeklyTrend,
            },
        });
    } catch (e) {
        console.error("Error fetching analytics:", e);
        return res.status(500).json({
            success: false,
            message: "Could not fetch mood analytics",
            error: e instanceof Error ? e.message : e,
        });
    }
});

export default router;
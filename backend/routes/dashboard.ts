import { Router } from "express";
import { authMiddleware } from "../auth-middleware";
import prisma from "../lib/prisma";

const router = Router();

// GET /dashboard/summary — aggregated user stats for the dashboard page
router.get("/summary", authMiddleware, async (req, res) => {
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        // Run all queries in parallel for speed
        const [
            moodCount,
            journalCount,
            chatCount,
            recentMoods,
            recentJournals,
            recentChats,
            moodDistribution,
        ] = await Promise.all([
            // Total counts
            prisma.mood.count({ where: { userId } }),
            prisma.journaling.count({ where: { userId } }),
            prisma.execution.count({ where: { userId } }),

            // Recent activity (last 5 of each)
            prisma.mood.findMany({
                where: { userId },
                orderBy: { createdAt: "desc" },
                take: 5,
                select: { id: true, moodType: true, text: true, createdAt: true },
            }),
            prisma.journaling.findMany({
                where: { userId },
                orderBy: { createdAt: "desc" },
                take: 5,
                select: { id: true, title: true, moodType: true, createdAt: true },
            }),
            prisma.execution.findMany({
                where: { userId },
                orderBy: { createdAt: "desc" },
                take: 5,
                select: { id: true, title: true, createdAt: true },
            }),

            // Mood distribution (last 30 days)
            prisma.mood.groupBy({
                by: ["moodType"],
                where: {
                    userId,
                    createdAt: {
                        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
                    },
                },
                _count: { moodType: true },
                orderBy: { _count: { moodType: "desc" } },
            }),
        ]);

        // Build a 7-day mood trend
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const weeklyMoods = await prisma.mood.findMany({
            where: {
                userId,
                createdAt: { gte: sevenDaysAgo },
            },
            orderBy: { createdAt: "asc" },
            select: { moodType: true, createdAt: true },
        });

        // Group by date
        const moodTrend: Record<string, string[]> = {};
        weeklyMoods.forEach((m) => {
            const dateKey = m.createdAt.toISOString().split("T")[0]!;
            if (!moodTrend[dateKey]) moodTrend[dateKey] = [];
            moodTrend[dateKey]!.push(m.moodType);
        });

        return res.status(200).json({
            success: true,
            message: "Dashboard summary fetched successfully",
            data: {
                stats: {
                    totalMoods: moodCount,
                    totalJournals: journalCount,
                    totalChats: chatCount,
                },
                recentActivity: {
                    moods: recentMoods,
                    journals: recentJournals,
                    chats: recentChats,
                },
                moodDistribution: moodDistribution.map((m) => ({
                    mood: m.moodType,
                    count: m._count.moodType,
                })),
                moodTrend,
            },
        });
    } catch (error) {
        console.error("Error fetching dashboard summary:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch dashboard summary",
            error: error instanceof Error ? error.message : error,
        });
    }
});

export default router;

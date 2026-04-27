import { Router } from "express";
import z from "zod";
import prisma from "../lib/prisma";
import { authMiddleware } from "../auth-middleware";

const router = Router();

// POST /feedback — submit a contact/feedback form (no auth required)
router.post("/", async (req, res) => {
    try {
        const feedbackSchema = z.object({
            name: z.string().min(2, "Name must be at least 2 characters"),
            email: z.string().email("Invalid email address"),
            subject: z.string().min(3, "Subject must be at least 3 characters"),
            message: z.string().min(10, "Message must be at least 10 characters"),
        });

        const result = feedbackSchema.safeParse(req.body);

        if (!result.success) {
            console.log("Validation Error:", result.error.issues);
            return res.status(400).json({
                success: false,
                message: "Validation error",
                errors: result.error.issues,
            });
        }

        const { name, email, subject, message } = result.data;

        const feedback = await prisma.feedback.create({
            data: { name, email, subject, message },
        });

        return res.status(201).json({
            success: true,
            message: "Feedback submitted successfully. We'll get back to you soon!",
            feedback: { id: feedback.id, createdAt: feedback.createdAt },
        });
    } catch (error) {
        console.error("Error submitting feedback:", error);
        return res.status(500).json({
            success: false,
            message: "Could not submit feedback. Please try again later.",
            error: error instanceof Error ? error.message : error,
        });
    }
});

// GET /feedback — get feedback submissions for the authenticated user's email
router.get("/", authMiddleware, async (req, res) => {
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        // Get the user's email to find their feedback
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { email: true },
        });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const feedbacks = await prisma.feedback.findMany({
            where: { email: user.email },
            orderBy: { createdAt: "desc" },
        });

        return res.status(200).json({
            success: true,
            message: "Feedbacks fetched successfully",
            feedbacks,
        });
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
        return res.status(500).json({
            success: false,
            message: "Could not fetch feedbacks",
            error: error instanceof Error ? error.message : error,
        });
    }
});

export default router;

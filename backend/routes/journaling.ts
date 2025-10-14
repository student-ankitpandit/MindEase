import express, {Router} from 'express';
import z, { success } from 'zod';
import prisma from '../lib/prisma';

const router = Router()
//creating a journaling entry
router.post("/journaling", async(req, res) => {
    try {
        const journalingSchema = z.object({
            title: z.string().optional(),
            content: z.string().min(10, {message: "Content should be at least 10 characters long"}),
            userId: z.string(),
            moodType: z.enum(["Happy",
                            "Sad",
                            "Anxious",
                            "Excited",
                            "Angry",
                            "Calm",
                            "Stressed",
                            "Neutral",
                            "Grateful",
                            "Lonely",]).optional(),
            moodScore: z.number().min(1).max(10).optional(),
            tags: z.array(z.string()).optional()
        })

        const result = journalingSchema.safeParse(req.body)

        if(!result.success) {
            console.log("Validation Error: ", result.error.issues)
            return res.status(400).json({success: false, message: "Validation Error", errors: result.error.issues})
        }

        const {title, content, userId, moodType, moodScore, tags} = result.data

        const dbMoodType = moodType ? (moodType.toUpperCase() as any) : undefined;

        const newEntry = await prisma.journaling.create({
            data: {
                title,
                content,
                userId,
                moodType: dbMoodType,
                moodScore,
                tags
            }
        })

        return res.status(201).json({success: true, message: "Journaling entry created successfully", journaling: newEntry})

    } catch (error) {
        console.log("Error creating your journal entry: ", error)
        return res.status(500).json({success: false, message: "Could not create journaling entry", error: error instanceof Error ? error.message : error})
    }
})


router.get("/journaling/:userId", async(req, res) => {
    const userId = req.params.userId

    if(!userId) {
        return res.status(400).json({success: false, message: "UserId is required"})
    }

    try {
        const userSchema = z.object({
            userId:z.string(),
        })

        const result = userSchema.safeParse({ userId })

        if(!result.success) {
            console.log("Validation Error: ", result.error.issues)
            return res.status(400).json({success: false, message: "Validation Error", errors: result.error.issues})
        }

        const entries = await prisma.journaling.findMany({
            where: {
                userId: userId
            }
        })
        res.status(200).json({success: true, message: "Journaling entries fetched successfully", entries})
    } catch (error) {
        console.log("Error fetching journaling entries: ", error)
        return res.status(500).json({success: false, message: "Could not fetch journaling entries", error: error instanceof Error ? error.message : error})
    }
})

//get all journal entries
router.get("/get-all-journals", async(req, res) => {
    const userId = req.query.userId as string

    if(!userId) {
        return res.status(400).json({success: false, message: "UserId is required"})
    }

    try {
        const userSchema = z.object({
            userId:z.string(),
        })

        const result = userSchema.safeParse({ userId })

        if(!result.success) {
            console.log("Validation Error: ", result.error.issues)
            return res.status(400).json({success: false, message: "Validation Error", errors: result.error.issues})
        }

        const allEntries = await prisma.journaling.findMany({
            where: {
                userId
            }
        })
        res.status(200).json({success: true, message: "All journaling entries fetched successfully", allEntries})
    } catch (error) {
        console.log("Error fetching all journaling entries: ", error)
        return res.status(500).json({success: false, message: "Could not fetch all journaling entries, Try again later", error: error instanceof Error ? error.message : error})
    }

})

export default router
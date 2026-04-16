import express, { Router } from "express"
import { authMiddleware } from "../auth-middleware"
import { z, cuid } from "zod"
import { model, genAI } from "../config/geminiConfig"
import prisma from "../lib/prisma"
import { v4 as uuidv4 } from "uuid"


const router = Router()

router.post("/chat", authMiddleware, async (req, res) => {
    try {
        const chatSchema = z.object({
            question: z.string().min(1, { message: "Question cannot be empty." }),
            
        })

        const parsedRes = chatSchema.safeParse(req.body)
        //console.log(parsedRes.success)

        if(!parsedRes.success) {
            console.log("Validation Error: ", parsedRes.error.issues)
            res.status(400).json({success: false, message: "Please provide the valid input"})
            return
        }

        const { question } = parsedRes.data 
        const userId = req.userId

        // if(!question || question.trim().length == 0) {
        //     return res.status(400).json({message: "Question cannot be empty", success: false})
        // }

        //console.log(question)

        const prompt = `You are a supportive ai assistant helping youth manage everyday stress related to academics, career, relationship, and personal growth.

        USER QUESTION: ${question}

        Provide practical stress-reduction strategies in a warm, encouraging tone.

        If the question involves serious mental health crisis (self-harm, suicide), politely explain:
        "I'm designed to help with everyday stress management. For serious concerns, please reach out to a mental health professional or crisis helpline. Your wellbeing matters."

        Response format(JSON only)
        {
            "response": "Your supportive response"
        }`;

        const chatId = uuidv4(); 

        // const userId2 = cuid();
        // console.log(userId2.length);

        const response = await genAI.models.generateContent({
            model: model,
            contents: prompt
        })
        const responseInText = response.text;


        let finalRes
        try {
            const cleanedText = (responseInText || "")
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .replace(/\\n/g, " ")
                .replace(/\*\*/g, "")
                .trim();
                
            finalRes = JSON.parse(cleanedText)
            // console.log(finalRes)

            const conversation = await prisma.conversation.create({
                data: { title: question.slice(0, 50) || "" }
            })

            await prisma.execution.create({
                data: {
                    user: { connect: { id: userId }},
                    title: question.slice(0, 200) || "Chat",
                    externalId: conversation.id,
                    chatId: chatId
                }
            })

            res.status(200).json({
                success: true, 
                message: "Response generated sucessfully", 
                res: finalRes, 
                user: userId,
                chatId: chatId
            })
            return
        } catch (e) {
            console.log("Failed to parse AI response", e)
            res.status(500).json({
                success: false, 
                message: "Failed to parse AI response"
            })
            return
        }

    } catch (e) {
        console.log("Error in generating the response: ", e)
        res.status(500).json({success: false, message: "Failed to generate response. Please try again."})
    }

})

router.get("/conversations/:conversationId", authMiddleware, async (req, res) => {
    const userId = req.userId
    const conversationId = req.params.conversationId
    try {
        const execution = await prisma.execution.findFirst({ 
            where: { 
                id: conversationId,
                userId
            }})

        if (!execution) {
            res.status(404).json({
                message: "Execution not found"
            });
            return;
        }

        // if(execution.length === 0) {
        //     res.status(404).json({
        //         success: false, 
        //         message: "No previous chats found"
        //     })
        //     return
        // }

        if(!execution.externalId) {
            res.status(400).json({
                success: false,
                message: "No externalId found for this execution"
            })
        }

        const conversation = await prisma.conversation.findFirst({
            where: { id: execution?.externalId!},
            include: {
                messages: {
                    orderBy: {createdAt: 'desc'}
                }
            }
        })

        return res.status(200).json({success: true, message: "Fetched chats successfully", conversations : conversation})


    
    } catch (e) {
        console.log("Error fetching chats: ", e)
        return res.status(400).json({success: false, message: "Error in fetching chats"})
    }
})



router.delete("/delete-chat/:chatId", authMiddleware, async (req, res) => {
    const userId = req.userId
    const chatId = req.params.chatId

    if(!userId) {
        return res.status(400).json({success: false, message: "User Id is required"})
    }

    const execution = await prisma.execution.findFirst({ where: { id: userId } })

    if(!execution) {
        res.status(404).json({
            success: false, 
            message: "Chat not found"
        })
        return
    }

    await prisma.execution.delete({ where: { id: chatId }})

    res.status(200).json({
        success: true,
        message: "Chat deleted successfully"
    })
})




export default router
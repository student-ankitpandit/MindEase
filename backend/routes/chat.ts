import { Router } from "express";
import { authMiddleware } from "../auth-middleware";
import { z } from "zod";
import { genAI, model } from "../config/geminiConfig";
import prisma from "../lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { encryptMessage, decryptMessage } from "../lib/encryption";

const router = Router();

router.post("/chat", authMiddleware, async (req, res) => {
    try {
        const chatSchema = z.object({
            question: z.string().min(1, { message: "Question cannot be empty." }),
            conversationId: z.string().optional(),
        });
        const parsedRes = chatSchema.safeParse(req.body);
        if (!parsedRes.success) {
            return res.status(400).json({ success: false, message: "Please provide valid input" });
        }
        const { question, conversationId } = parsedRes.data;
        const userId = req.userId;
        if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

        let conversationHistory = "";
        let existingConversation = null;
        if (conversationId) {
            existingConversation = await prisma.conversation.findFirst({
                where: { id: conversationId },
                include: { messages: { orderBy: { createdAt: "asc" }, take: 10 } },
            });
            if (existingConversation) {
                conversationHistory = existingConversation.messages
                    .map((m) => `${m.role === "user" ? "USER" : "ASSISTANT"}: ${decryptMessage(m.content)}`)
                    .join("\n");
            }
        }

        const prompt = 
        `You are a supportive AI assistant helping youth manage everyday stress related to academics, career, relationships, and personal growth. ${conversationHistory ? `CONVERSATION HISTORY:\n${conversationHistory}\n\n` : ""}

        USER QUESTION: ${question}

        Provide practical stress-reduction strategies in a warm, encouraging tone.
        Format your response using Markdown (e.g., bullet points, bold text) to make it highly structured and easy to read.

        If the question involves a serious mental health crisis (self-harm, suicide), politely explain:
        "I'm designed to help with everyday stress management. For serious concerns, please reach out to a mental health professional or crisis helpline."

        Response format (JSON only):
        { "response": "Your supportive, markdown-formatted response" }`;

        const response = await genAI.models.generateContent({ model, contents: prompt });
        let finalRes;
        try {
            // Remove code block markers but preserve markdown structure inside the JSON string
            let cleaned = (response.text || "").trim();
            if (cleaned.startsWith("```json")) {
                cleaned = cleaned.replace(/^```json\n?/, "").replace(/\n?```$/, "");
            } else if (cleaned.startsWith("```")) {
                cleaned = cleaned.replace(/^```\n?/, "").replace(/\n?```$/, "");
            }
            finalRes = JSON.parse(cleaned);
        } catch (e) {
            return res.status(500).json({ success: false, message: "Failed to parse AI response" });
        }

        let conversation;
        if (existingConversation) {
            conversation = existingConversation;
        } else {
            conversation = await prisma.conversation.create({ data: { title: question.slice(0, 50) } });
            await prisma.execution.create({
                data: { user: { connect: { id: userId } }, title: question.slice(0, 200) || "Chat", externalId: conversation.id, chatId: uuidv4() },
            });
        }

        const encryptedQuestion = encryptMessage(question);
        const encryptedResponse = encryptMessage(finalRes.response);

        await prisma.message.create({ data: { content: encryptedQuestion, role: "user", conversationId: conversation.id } });
        await prisma.message.create({ data: { content: encryptedResponse, role: "assistant", conversationId: conversation.id } });

        return res.status(200).json({ success: true, message: "Response generated successfully", res: finalRes, conversationId: conversation.id, user: userId });
    } catch (e) {
        console.error("Error generating response:", e);
        return res.status(500).json({ success: false, message: "Failed to generate response." });
    }
});

router.get("/conversations", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });
    try {
        const executions = await prisma.execution.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
            select: { id: true, title: true, externalId: true, chatId: true, createdAt: true, updatedAt: true },
        });
        return res.status(200).json({ success: true, message: "Conversations fetched", conversations: executions });
    } catch (e) {
        return res.status(500).json({ success: false, message: "Error fetching conversations" });
    }
});

router.get("/conversations/:conversationId", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const convId = req.params.conversationId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });
    try {
        const execution = await prisma.execution.findFirst({ where: { externalId: convId, userId } });
        if (!execution) return res.status(404).json({ success: false, message: "Conversation not found" });

        const conversation = await prisma.conversation.findFirst({
            where: { id: convId },
            include: { messages: { orderBy: { createdAt: "asc" } } },
        });
        if (!conversation) return res.status(404).json({ success: false, message: "Conversation not found" });

        // Decrypt messages for the frontend
        const decryptedMessages = conversation.messages.map(m => ({
            ...m,
            content: decryptMessage(m.content)
        }));

        return res.status(200).json({ success: true, message: "Conversation fetched", conversation: { ...conversation, messages: decryptedMessages } });
    } catch (e) {
        return res.status(500).json({ success: false, message: "Error fetching conversation" });
    }
});

router.post("/conversations/:conversationId/messages", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const convId = req.params.conversationId as string;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });
    try {
        const parsed = z.object({ question: z.string().min(1) }).safeParse(req.body);
        if (!parsed.success) return res.status(400).json({ success: false, message: "Message cannot be empty" });

        const execution = await prisma.execution.findFirst({ where: { externalId: convId, userId } });
        if (!execution) return res.status(404).json({ success: false, message: "Conversation not found" });

        const { question } = parsed.data;
        const msgs = await prisma.message.findMany({ where: { conversationId: convId }, orderBy: { createdAt: "asc" }, take: 20 });
        const history = msgs.map((m) => `${m.role === "user" ? "USER" : "ASSISTANT"}: ${decryptMessage(m.content)}`).join("\n");

        const prompt = `You are a supportive AI assistant helping youth with stress.
CONVERSATION HISTORY:\n${history}\nUSER FOLLOW-UP: ${question}
Continue naturally. Format your response using Markdown (e.g., bullet points, bold text) for structure and readability.
Response format (JSON only): { "response": "Your structured, markdown-formatted response" }`;

        const response = await genAI.models.generateContent({ model, contents: prompt });
        let finalRes;
        try {
            // Remove code block markers but preserve markdown structure inside the JSON string
            let cleaned = (response.text || "").trim();
            if (cleaned.startsWith("```json")) {
                cleaned = cleaned.replace(/^```json\n?/, "").replace(/\n?```$/, "");
            } else if (cleaned.startsWith("```")) {
                cleaned = cleaned.replace(/^```\n?/, "").replace(/\n?```$/, "");
            }
            finalRes = JSON.parse(cleaned);
        } catch (e) {
            return res.status(500).json({ success: false, message: "Failed to parse AI response" });
        }

        const encryptedQuestion = encryptMessage(question);
        const encryptedResponse = encryptMessage(finalRes.response);

        await prisma.message.create({ data: { content: encryptedQuestion, role: "user", conversationId: convId } });
        await prisma.message.create({ data: { content: encryptedResponse, role: "assistant", conversationId: convId } });

        return res.status(200).json({ success: true, message: "Follow-up response generated", res: finalRes, conversationId: convId });
    } catch (e) {
        return res.status(500).json({ success: false, message: "Failed to generate response" });
    }
});

router.delete("/delete-chat/:chatId", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const chatId = req.params.chatId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });
    try {
        const execution = await prisma.execution.findFirst({ where: { id: chatId, userId } });
        if (!execution) return res.status(404).json({ success: false, message: "Chat not found" });

        if (execution.externalId) {
            await prisma.message.deleteMany({ where: { conversationId: execution.externalId } });
            await prisma.conversation.delete({ where: { id: execution.externalId } }).catch(() => { });
        }
        await prisma.execution.delete({ where: { id: chatId } });
        return res.status(200).json({ success: true, message: "Chat deleted successfully" });
    } catch (e) {
        return res.status(500).json({ success: false, message: "Could not delete chat" });
    }
});

// POST /chatWithMe/conversations/:conversationId/summarize — AI summary of conversation
router.post("/conversations/:conversationId/summarize", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const convId = req.params.conversationId;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });
    try {
        const execution = await prisma.execution.findFirst({ where: { externalId: convId, userId } });
        if (!execution) return res.status(404).json({ success: false, message: "Conversation not found" });

        const msgs = await prisma.message.findMany({ where: { conversationId: convId }, orderBy: { createdAt: "asc" } });
        if (msgs.length === 0) return res.status(400).json({ success: false, message: "No messages to summarize" });

        const history = msgs.map((m) => `${m.role === "user" ? "USER" : "ASSISTANT"}: ${m.content}`).join("\n");

        const prompt = `Summarize this mental wellness conversation into clear, actionable key takeaways.
Include: 1. Main topics discussed 2. Key advice given 3. Action items for the user

CONVERSATION:
${history}

Response format (JSON only):
{ "summary": "A clear 3-5 sentence overview", "keyTakeaways": ["Takeaway 1", "Takeaway 2"], "actionItems": ["Action 1", "Action 2"] }`;

        const response = await genAI.models.generateContent({ model, contents: prompt });
        let summary;
        try {
            const cleaned = (response.text || "").replace(/```json/g, "").replace(/```/g, "").replace(/\*\*/g, "").trim();
            summary = JSON.parse(cleaned);
        } catch {
            return res.status(500).json({ success: false, message: "Failed to parse summary" });
        }

        return res.status(200).json({ success: true, message: "Summary generated", ...summary });
    } catch (e) {
        console.error("Error summarizing:", e);
        return res.status(500).json({ success: false, message: "Could not summarize conversation" });
    }
});

export default router;
import express from "express";
import Message from "../../schemas/MessageSchema.js";
import Conversation from "../../schemas/ConversationSchema.js";
import verifyToken from "../auth/authMiddleware.js";

const ConversationCompiler = express.Router();

ConversationCompiler.post('/', verifyToken, (req, res) => {
    if (!req.body.userId) {
        res.status(400).json({
            status: 'Failed to provide information',
            error: "no userId provided"
        })
        return
    }
    Message.find({
        userId: req.body.userId
    }).then((messages) => {
        const conversationsIds = []
        const conversations = []
        const sortedMessages = messages
        for (const message of messages) {
            if (!conversationsIds.includes(message.conversationId)) {
                conversationsIds.push(message.conversationId);
        }}
        
        sortedMessages.sort((a, b) => a.conversationId - b.conversationId)

        for (const conversationId of conversationsIds) {
            const messages = []
            for (const message of sortedMessages) {
                if (message.conversationId == conversationId) {
                    messages.push(message)
                }
            }
            conversations.push({conversationId: conversationId, messages: messages})
        }

        res.status(200).json({
            status: 'Access granted',
            error: 'none',
            conversations: conversations
        })
        // console.log(`\nConversation IDs: ${conversationsIds}\n`);
    }).catch((err) => {
        console.error(err);
    })
    
})


export default ConversationCompiler;
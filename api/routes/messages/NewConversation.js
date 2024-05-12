import express from 'express';
import verifyToken from '../auth/authMiddleware.js';
import Conversation from '../../schemas/ConversationSchema.js';
const NewConversation = express.Router();

NewConversation.post('/', verifyToken, (req, res) => {
    Conversation.find().sort({conversationCreatedTimestamp: -1}).limit(1).then(
        (conversation) => {
            let newConversationId = conversation[0].conversationId
            if (!newConversationId) {
                newConversationId = "1";
            } else {
                newConversationId = parseInt(newConversationId) + 1;
                newConversationId = newConversationId.toString();
            }
            const newConversationUsers = req.body.conversationUsers;
            const newConversationName = req.body.conversationName;
            if (!newConversationUsers) {
                res.status(400).json({
                    status: 'Failed to provide information',
                    error: "no conversationUsers provided"
                })
                return
            }
            if (!newConversationName) {
                res.status(400).json({
                    status: 'Failed to provide information',
                    error: "no conversationName provided"
                })
                return
            }

            const newConversation = new Conversation({
                conversationId: newConversationId,
                conversationName: newConversationName,
                conversationUsers: newConversationUsers,
                conversationCreatedTimestamp: Date.now()
            })
            newConversation.save().then(
                (conversation) => {
                    res.status(200).json({
                        status: 'Conversation created',
                        conversationId: conversation.conversationId,
                        conversationName: conversation.conversationName,
                        conversationUsers: conversation.conversationUsers,
                        conversationCreatedTimestamp: conversation.conversationCreatedTimestamp
                    })
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        status: 'Failed to create conversation',
                        error: error.message
                    })
                }
            )
        }
    )
})

export default NewConversation;
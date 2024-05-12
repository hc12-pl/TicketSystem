import express from 'express';
import mongoose from 'mongoose';

import verifyToken from '../auth/authMiddleware.js';
import Message from '../../schemas/MessageSchema.js';

const GetUserMessages = express.Router();







GetUserMessages.post('/', verifyToken, (req, res) => {
    try {
        if (!req.body.userId) {
            res.status(400).json({
                status: 'Failed to provide information',
                error: "no userId provided"
            })
        }
        Message.find({
            userId: req.body.userId,
        }).then((messages) => {
            if (messages.length > 0) {
                res.status(200).json({
                    status: 'Messages Fetched',
                    error: 'none',
                    messages: messages
                })
            } else {
                res.status(200).json({
                    status: 'No Messages',
                    error: 'none',
                    messages: []
                })
            }
        })
    } catch (err) {
        console.error(err);
    }
    
})

export default GetUserMessages;

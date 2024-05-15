import express from 'express';
import verifyToken from '../auth/authMiddleware.js';
import Message from '../../schemas/MessageSchema.js';
const NewMessage = express.Router();

NewMessage.post('/', verifyToken, (req, res) => {
    Message.find().sort({messageTimestamp: -1}).limit(1).then(
        (message) => {
            let newMessageId = message[0].messageid
            if (!newMessageId) {
                newMessageId = "1";
            } else {
                newMessageId = parseInt(newMessageId) + 1;
                newMessageId = newMessageId.toString();
            }
            
        }
    )
    
})

export default NewMessage;
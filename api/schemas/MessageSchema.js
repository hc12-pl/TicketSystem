import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const MessageSchema = new mongoose.Schema({
    messageid: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    messageContent: {
        type: String,
        required: true,
    },
    messageTimestamp: {
        type: Date,
        default: Date.now()
    },
    conversationId: {
        type: String,
        required: true
    }
});

const Message = model('Message', MessageSchema, 'Message_Collection');
export default Message
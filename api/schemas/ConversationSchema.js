import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const ConversationSchema = new mongoose.Schema({
    conversationId: {
        type: String,
        required: true,
        unique: true
    },
    conversationCreatedTimestamp: {
        type: Date,
        default: Date.now()
    },
    conversationClosedTimestamp: {
        type: Date,
        default: null
    },
    conversationStatus: {
        type: String,
        required: true,
        default: 'open'
    },
    conversationUsers: {
        type: Array,
        required: true
    },
    conversationName: {
        type: String,
        required: true
    }
})

const Conversation = mongoose.model('Conversation', ConversationSchema, 'Conversation_Collection');
export default Conversation
import mongoose from "mongoose";
import Conversation from "../schemas/ConversationSchema.js";


try {
    mongoose.connect('mongodb://localhost:27017/ticket_system');
    console.log('Connected to MongoDB');
} catch (error) {
    console.error(error);
    exit(1);
}

const conversation = new Conversation({
    conversationId: "1",
    conversationCreatedTimestamp: Date.now(),
    conversationClosedTimestamp: null,
    conversationUsers: ["1", "2"],
    conversationName: "test conversation"
})

try {
    await conversation.save();
} catch (err) {
    console.error(err);
}

process.exit(1)


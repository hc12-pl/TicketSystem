import Message from "../schemas/MessageSchema.js";
import mongoose from "mongoose";
try {
    mongoose.connect('mongodb://localhost:27017/ticket_system');
    console.log('Connected to MongoDB');
} catch (error) {
    console.error(error);
    exit(1);
}

let newMessage = new Message({
    messageid: "9",
    userId: "1",
    messageContent: "test message 9",
    messageTimestamp: Date.now(),
    conversationId: "3"
})


try {
    await newMessage.save();
} catch (err) {
    console.error(err)
}

process.exit(1);
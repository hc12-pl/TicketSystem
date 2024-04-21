import mongoose from "mongoose";
import User from "../schemas/UserSchema.js";
const { Schema, model } = mongoose;

try {
    mongoose.connect('mongodb://localhost:27017/ticket_system');
    console.log('Connected to MongoDB');
} catch (error) {
    console.error(error);
    exit(1);
}

const user = new User({
    userId: "3",
    userIcon: "url",
    role: "user",
    email: "email3@example.com",
    password: "HASH PASSWORD",
    username: "username3"
})

await user.save();


import mongoose from "mongoose";
import User from "../schemas/UserSchema.js";
import bcrypt from 'bcrypt';
const { Schema, model } = mongoose;

try {
    mongoose.connect('mongodb://localhost:27017/ticket_system');
    console.log('Connected to MongoDB');
} catch (error) {
    console.error(error);
    exit(1);
}

let hashedPassword = "password"
hashedPassword = await bcrypt.hash(hashedPassword, 10);

const user = new User({
    userId: "1",
    userIcon: "url",
    role: "user",
    email: "email1@example.com",
    password: hashedPassword,
    username: "username1",
    jwtToken: "none"
})

try {
    await user.save();
} catch (error) {
    console.error(error)
}

process.exit(1)

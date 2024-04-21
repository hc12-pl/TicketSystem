import mongoose from "mongoose";
import User from "../schemas/UserSchema.js";

try {
    mongoose.connect('mongodb://localhost:27017/ticket_system');
    console.log('Connected to MongoDB');
} catch (error) {
    console.error(error);
    exit(1);
}

let lastUserId;
const { Schema, model } = mongoose;

await User.find()
.sort({ _id: -1})
.limit(1)
.then(users => {
    if (users.length > 0) {
        lastUserId = users[0].userId;
    } else {
        lastUserId = '1';
    }
})
await console.log(lastUserId);

mongoose.connection.close();

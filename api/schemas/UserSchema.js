import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    userIcon: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    jwtToken: {
        type: String,
        required: true,
    },
    
})

const User = model('User', UserSchema, 'User_Collection');
export default User
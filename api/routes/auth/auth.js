import express from 'express';
import User from '../../schemas/UserSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken' ;
import { config } from '../../config.js';
const AuthRoute = express.Router();

let JWTTOKEN = '';
JWTTOKEN = config.JWTTOKEN;

AuthRoute.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
            return res.status(400).json({ message: 'Wrong password' });
        }
        const token = jwt.sign(
            { userId: user.userId},
            { JWTTOKEN},
            { expiresIn: '1h' }
        )
    } catch (err) {
        res.status(500).json({ 
            status: 'error',
            error: err.message 
        });
}});

export default AuthRoute;
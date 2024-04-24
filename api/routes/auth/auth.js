import express from 'express';
import User from '../../schemas/UserSchema.js';
import bcrypt from 'bcrypt';
import paseto from 'paseto';
import { config } from '../../config.js';
const AuthRoute = express.Router();

const { V4: { sign } } = paseto;




AuthRoute.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
            return res.status(400).json({ 
                status: 'error',
                message: 'Wrong password' });
        }
        const token = await sign(
            {sub : user.userId},
            config.secretKey,
            {expiresIn: "1h"}

        )
        return res.status(200).json({
        status: 'Access granted',
        error: 'none',
        token: token
    })
    } catch (err) {
        res.status(500).json({ 
            status: 'error',
            error: err.message 
        });
}});

export default AuthRoute;
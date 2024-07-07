import express from 'express';
import User from '../../../schemas/UserSchema.js';
import verifyToken from '../authMiddleware.js';
const userInfo = express.Router();

userInfo.post('/', verifyToken, (req, res) => {
    User.findOne({
        username: req.body.username
    }).then((user) => {
        if (Object.keys(req.body).lenght === 0) {
            res.status(400).json({
                status: 'Failed to provide information',
                error: 'Did not provide enought information'
            });
            return;
        } else {
            res.status(200).json({
                status: 'User Information Fetched',
                error: 'none',
                user: user
            });
        }
    })
})

export default userInfo;
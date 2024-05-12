import express from 'express';
import verifyToken from '../auth/authMiddleware';
const NewMessage = express.Router();

NewMessage.post('/', verifyToken, (req, res) => {
    
})
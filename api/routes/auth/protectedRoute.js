import express from 'express';
import verifyToken from './authMiddleware.js';
const protectedRoute = express.Router();

protectedRoute.get('/', verifyToken, (req, res) => {
    res.status(200).json({
        status: 'Access granted',
        error: 'none'
});
});

export default protectedRoute;
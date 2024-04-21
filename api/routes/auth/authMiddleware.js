import jwt from 'jsonwebtoken';
import { config } from '../../config.js';

let JWTTOKEN;
JWTTOKEN = config.JWTTOKEN;

function verifyToken(req, res, next) {
    const token = req.header('authorization');
    if (!token) {
        return res.status(401).json({
            status: 'Access Denided',
            error: 'No Token Provided'
        })
    }
    try {
        const decoded = jwt.verify(token, JWTTOKEN);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).json({
            status: 'Access Denided',
            error: 'Invalid Token'
        })
    
}}

export default verifyToken;
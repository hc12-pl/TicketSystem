
import paseto from 'paseto';
import { config } from '../../config.js';

const { V4: { verify } } = paseto;



function verifyToken(req, res, next) {
    const token = req.header('authorization');
    if (!token) {
        return res.status(401).json({
            status: 'Access Denided',
            error: 'No Token Provided'
        })
    }
    try {
        const decoded = verify(token, config.secretKey);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).json({
            status: 'Access Denided',
            error: 'Invalid Token'
        })
    
}}

export default verifyToken;
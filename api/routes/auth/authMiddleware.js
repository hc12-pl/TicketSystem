import paseto from 'paseto';
import { config } from '../../config.js';

const { V4: { verify } } = paseto;
const secretKey = config.secretKey;

function verifyToken(req, res, next) {
    const token = req.header('authorization');
    if (!token) {
        return res.status(401).json({
            status: 'Access Denied',
            error: 'No Token Provided'
        });
    }
    try {
        const decoded = verify(token, secretKey);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).json({
            status: 'Access Denied',
            error: 'Invalid Token'
        });
    }
}

export default verifyToken;

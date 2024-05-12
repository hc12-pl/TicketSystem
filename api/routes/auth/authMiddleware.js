import paseto from 'paseto';
import { config } from '../../config.js';

const { V4: { verify } } = paseto;
const publicKey = config.publicKey;

function verifyToken(req, res, next) {
    let token = req.header('authorization')
    if (!token) {
        return res.status(401).json({
            status: 'Access Denied',
            error: 'No Token Provided'
        });
    }
    try {
        if (token.toString().startsWith('Bearer')) {
            token = token.toString().split('Bearer ')[1];
        } else if (token.startsWith('v4')) {
            token = token.toString();
        }
        try {
            const decoded = verify(token, publicKey);
            req.userId = decoded.userId;
            next();
        } catch (error) {
            if (error.message == "token is expired") {
                return res.status(401).json({
                    status: 'Access Denied',
                    error: 'Token expired'
                });
            }
        }
        
    } catch (err) {
        return res.status(401).json({
            status: 'Access Denied',
            error: 'Invalid Token'
        });
    }
}

export default verifyToken;

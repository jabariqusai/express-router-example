import jwt from 'jsonwebtoken';
import secretKey from '../../secrets/secrets.js';
/**
 * @type {RequestHandler}
 * @param {string} roles
 */
const guard = role => {
    /**
     * @type {import('Express').RequestHandler}
     */
    return (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            res.status(400).send('Invalid credentials');
            return;
        }
        try {
            const payload = jwt.verify(token, secretKey);
            if (role && !payload.roles.includes(role)) {
                res.status(403).send('forbidden');
                return;
            }
            req.payload = payload;
        } catch (error) {
            res.status(401).send(error);
            return;
        }
        next();
    };
};

export default guard;

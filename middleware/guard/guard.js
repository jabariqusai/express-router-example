import jwt from 'jsonwebtoken';
import RequestHandler from 'express';
/**
 * @type {RequestHandler}
 */
const guard = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(400).send('Invalid credentials');
        return;
    }
    try {
        const payload = jwt.verify(token, 'hello@sadaTraining');
        req.payload = payload;
    } catch (error) {
        res.status(401).send(error);
        return;
    }
    next();
};

export default guard;

import jwt from 'jsonwebtoken';

const guard = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(400).send('Invalid credentials');
        return;
    }
    try {
        const payload = jwt.verify(token, 'hello@sadaTraining');
        req.locals.payload = { payload };
        next();
    } catch (error) {
        res.status(401).send(error);
    }
};

export default guard;

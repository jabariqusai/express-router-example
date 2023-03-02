import jwt, { verify } from "jsonwebtoken"


/**
 * @type {import("express").RequestHandler}
 */
const guard = (req, res, next) => {
    const token = req.headers.authorization;
   console.log(token);
    if (!token) {
        res.status(401).send("unuthorized")
        return
    }
    else {
        try {
            const payload = jwt.verify(token, 'potato')
            res.user = payload;
        } catch (err) {
            res.status(401).send(err);
            return
        }
    }

    next();
}
export default guard;
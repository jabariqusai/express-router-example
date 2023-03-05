import jwt from 'jsonwebtoken';

/**
 * @type 
 * @type {import ('express').RequestHandler}
 */
const Guard = AlloweRole => {

    return (req, res, next) => {
        console.debug("From gaurd ");
        const token = req.headers.authorization;
        if (!token) {
            res.status(401).send("UnAuthorization")
            return;
        }
        else {

            try {

                const payload = jwt.verify(token, "potato")
                if (AlloweRole && payload.role !== AlloweRole) {
                    res.status(403).send("forbidden")
                }
                req.user = payload;


            } catch (error) {
                res.status(401).send("REJECTED !!");
                return;
            }
        }

        next();

    }
}
export default Guard;


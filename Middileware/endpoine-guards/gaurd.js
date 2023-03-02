import  jwt  from 'jsonwebtoken';

/**
 * 
 * @type {import ('express').RequestHandler}
 */
const Guard = (req, res, next) => {
    console.debug("From gaurd ");
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).send("UnAuthorization")
        return;
    }
    else {

        try {
            
            const payload = jwt.verify(token, "potato")
            req.user=payload;


        } catch (error) {
            res.status(401).send("REJECTED !!");
            return;
        }
    }

    next();

}
export default Guard;

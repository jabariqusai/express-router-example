import jwt, { verify } from "jsonwebtoken"
//guard is function returne middlware 


const guard = (allowedRole) => {
/**
 * @type {import("express").RequestHandler}
 */
    return (req, res, next) => {
        const token = req.headers.authorization;
        console.log(token);
        if (!token) {
            res.status(401).send("unuthorized")
            return
        }
        else {
            try { 
                const payload = jwt.verify(token, 'potato')//paylod ==user
                if (allowedRole && payload.role !== allowedRole) {
                    res.status(403).send("forbeddin hey hey hey you are not admin go back");//t know you but i dont want to come
                    return;
                }
                res.user = payload;
            } catch (err) {
                res.status(401).send(err);//go to home prother
                return
            }
        }

        next();
    }
}
export default guard;
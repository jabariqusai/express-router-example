import jwt from "jsonwebtoken";


/**
 * 
 * @param {string} allowedRole 
 */
const guard = (allowedRole) => {
  /**
   * @type {import('express').RequestHandler}
   */
 return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).send("token missing").end();
      return;
    } else {
      try {
        const payload = jwt.verify(token, "why");
        req.user = payload;
        if(allowedRole && allowedRole !== payload.role){
          res.status(403).send('you do not have an authentication');
          return;
        }
        console.debug("payload", payload);
      } catch (error) {
        res.status(401).end();
        console.debug(error);
        return;
      }
    }
    // console.debug("path",);
    next();
  };
};

export default guard;

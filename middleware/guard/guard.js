import Jwt from 'jsonwebtoken';


const guard = allowedRole => {
  /**
   * 
   *@type { import ('express').RequestHandler}
   */
  return (req, res, next) => {
    console.debug("From guard");
    const token = req.headers.authorization;

    if (!token) {

      req.status(401).send("Unauthenticated");
      return;

    } else {
      // verification part of the token
      try {

        const secret = "potato";
        const payload = Jwt.verify(token, secret);

        if(allowedRole && payload.role !== allowedRole)  {
          res.status(403).send("Forbidden !");
          return;
        }
        req.user = payload;

      } catch (error) {

        res.status(401).send("Token Rejected !");
        return;

      }
    }
 next();
  };

 
};


export default guard;
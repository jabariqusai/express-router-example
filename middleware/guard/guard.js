import Jwt from 'jsonwebtoken';

/**
 * 
 *@type { import ('express').RequestHandler}
 */
const guard = (req, res, next) => {
  console.debug("From guard");
  const token = req.headers.authorization;

  if (!token) {

    req.status(401).send("Unauthorized user");
    return;

  } else {

    // verification part of the token

    try {
      
      const secret = "potato";
      const payload = Jwt.verify(token, secret);
      req.user = payload;

    } catch (error) {

      res.status(401).send("Token Rejected !");
      return;

    }

  }

  next();
};


export default guard;
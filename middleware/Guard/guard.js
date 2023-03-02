import jwt from 'jsonwebtoken';

/**
 * @type {import ('express').RequestHandler}
 */
const guard = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send('token is required');
    return;
  }
  
    try {
      const payload = jwt.verify(token, "potato");
      console.log(payload);
      req.user = payload;
    } catch (err) {
      res.status(401).send("invalid token");
      return
    }
  
  next();
};

export default guard;
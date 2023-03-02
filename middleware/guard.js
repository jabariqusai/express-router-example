import jwt from 'jsonwebtoken';

const guard = allowedRoles => {
  /**
   * @type {import ('express').RequestHandler}
  */
 return (req, res, next) => {

    const token = req.headers.authorization;
    if (!token) {
      res.send(401).send('unauthenticated');
      return;
    }

    try { // because the 'verify' method does not return if the token is invalid
      const user = jwt.verify(token, 'potato');
      req.user = user;

      if(allowedRoles && user.role !== allowedRoles){
        res.status(403).send('forbidden')
        return;
      }

    } catch (err) {
      res.status(401).send('unauthorized!');
      return;
    }
    next();
  };
};

export default guard;
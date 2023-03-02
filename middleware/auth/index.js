import jwt from 'jsonwebtoken';

/**
 * 
 * @param {string} roles
 */
const auth = allowedRole => {
  /**
   * @type {import('express').RequestHandler}
   */
  return (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).send('unauthenticated');
    }
    else {
      try {
        const payload = jwt.verify(token, 'abd');
        console.log(payload);
        req.user = payload;

        if (allowedRole && allowedRole !== payload.role) {
          res.status(403).send('forbidden');
          return;
        }

      } catch (err) {
        console.error(err);
        res.status(403).send('forbidden');
      }
    }
    next();
  };
};

export default auth;
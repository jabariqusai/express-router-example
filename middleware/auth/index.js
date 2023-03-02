import jwt from 'jsonwebtoken';

/**
 * @type {import('express').RequestHandler}
 * @param {string} allowedRole
 */
const auth = allowedRole => (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send('unauthenticated');
  }
  else {
    try {
      const payload = jwt.verify(token, 'abd');
      req.user = payload;
      console.log(allowedRole);
      if (allowedRole && allowedRole !== payload.role) {
        res.status(403).send();
        return;
      }
    } catch (err) {
      console.error(err);
      res.status(403).send('forbidden');
    }
  }
  next();
};

export default auth;
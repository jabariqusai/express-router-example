import jwt from 'jsonwebtoken';

/**
 * @type {import('express').RequestHandler}
 * @param {Array} roles
 */
const auth = roles => (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send('unauthenticated');
  }
  else {
    try {
      const payload = jwt.verify(token, 'abd');
      req.user = payload;
      if (roles) {
        if (roles.includes(payload.role)) {
          next();
        } else {
          res.status(403).send('forbidden');
          return;
        }
      }

    } catch (err) {
      console.error(err);
      res.status(403).send('forbidden');
    }
  }
  next();
};

export default auth;
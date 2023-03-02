import jwt from 'jsonwebtoken';

/**
 * @param {string} allowedRole Permitted use role.
 */
const guard = allowedRole => {
  /**
   * @type {import('express').RequestHandler}
   */
  return (req, res, next) => {
    console.debug('From guard');
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).send('Unauthenticated');
      return;
    } else {
      // Verify the validity of the token.
      try {
        const payload = jwt.verify(token, 'potato');

        if (allowedRole && payload.role !== allowedRole) {
          res.status(403).send('Forbidden');
          return;
        }

        req.user = payload;
      } catch (error) {
        res.status(401).send('Token rejected');
        return;
      }
    }

    next();
  };
};

export default guard;
import jwt from 'jsonwebtoken';

/**
 * @type {import('express').RequestHandler}
 */
const guard = (req, res, next) => {
  console.debug('From guard');
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send('Unauthenticated');
    return;
  } else {
    // Verify the validity of the token.
    try {
      const payload = jwt.verify(token, 'potato');

      req.user = payload;
    } catch (error) {
      res.status(401).send('Token rejected');
      return;
    }
  }

  next();
};

export default guard;
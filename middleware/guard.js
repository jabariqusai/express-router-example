import jwt from 'jsonwebtoken';

/**
 * @type {import ('express').RequestHandler}
 */

const guard = (req, res, next) => {
  console.log('from guard');

  const token = req.headers.authorization;
  if (!token) {
    res.send(401).send('unauthenticated');
    return;
  }

  try {
    const user = jwt.verify(token, 'potato');
    req.user = user;

  } catch (err) {
    res.status(401).send('unauthorized');
    return;
  }

  next();
};

export default guard;
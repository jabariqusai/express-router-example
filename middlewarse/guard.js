/**
 * 
 * @type{import('express').RequestHandler} 
 */

import jwt from 'jsonwebtoken';

const guard = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).send('Unauthorization');
    return;
  } else {
    try {
      const payload = jwt.verify(token, 'potato');
      if (payload) {
         req.user = payload;
      next();
      }
     
    } catch (error) {
      res.status(401).send(error);
    }
  }
};
export default guard;
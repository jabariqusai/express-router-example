import jwt from 'jsonwebtoken';
/** 
 *@param {string} allowRoll
 *@return;
*/

const guard = allowRole => {
/**
 * 
 * @type{import('express').RequestHandler} 
 */
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).send('Unauthorization');
      return;
    } else {
      try {
        const payload = jwt.verify(token, 'potato');
        if (allowRole && payload.role !== allowRole) {
          res.status(403).send('Don"t have access');
        }
req.user = payload;
      } catch (error) {
        res.status(401).send(error);
      }
    }
    next();
  };
};
export default guard;
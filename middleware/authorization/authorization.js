import jwt from 'jsonwebtoken';

/**
 * 
 * @type {import ('express').RequestHandler} 
 * @returns 
 */

const authorization = allowedRoles => {
  return (req, res, next) => {
    const token = req.headers.authorization; // to get the token from request headers 
    if (!token) {
      console.log(token);
      res.status(401).send('token must be sent in request header'); // HTTP 401 status code -> unuathenticated
      return;
    }
    try { // we use try , catch  -> because of the verify function which throws an error if the token does not match 
      const payload = jwt.verify(token, 'raghad');
      req.user = payload;
      console.log(payload);

      if (allowedRoles) {
        let allowed = false;
        allowedRoles.forEach(role => {
          payload.role.forEach(userRole => {
            if (role === userRole)
              allowed = true;
          });
        });
        console.log('allowed flag', allowed);
        if (!allowed) {
          res.status(403).send('you don\'t have access to this endpoiont');
          return;
        }
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401).send('invalid token !'); // HTTP 401 status code -> unuathenticated
    }
  };
};


export default authorization;
import jwt from 'jsonwebtoken';

/**
 * 
 * @type {import ('express').RequestHandler} 
 * @returns 
 */
const authorization = (req, res, next) => {
  const token = req.headers.authorization ; // to get the token from request headers 
  if (!token) {
    console.log(token);
    res.status(401).send('token must be sent in request header'); // HTTP 401 status code -> unuathenticated
    return;
  }
  try { // we use try , catch  -> because of the verify function which throws an error if the token does not match 
    const varefication = jwt.verify(token, 'raghad');
    console.log(varefication);
    req.user = varefication ;
    next();
  } catch (error) {
    console.error(error)
    res.status(401).send('invalid token !'); // HTTP 401 status code -> unuathenticated
  }
};

export default authorization;
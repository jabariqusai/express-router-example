import jwt from 'jsonwebtoken';

const authorization = (req, res, next) => {
  const token = req.headers.authorization ; // to get the token from request headers 
  if (!token) {
    console.log(token);
    res.status(400).send('token must be sent in request header');
    return;
  }
  try { // we use try , catch  -> because of the verify function which throws an error if the token does not match 
    const varefication = jwt.verify(token, 'raghad');
    console.log(varefication);
    req.user = varefication ;
    next();
  } catch (error) {
    console.error(error)
    res.status(400).send('invalid token !');
  }
};

export default authorization;
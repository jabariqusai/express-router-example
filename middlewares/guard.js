
import jwt from 'jsonwebtoken'
/**
 * @type {import('express').RequestHandler}
 */
const guard = (req, res, next) =>{
  const token = req.headers.authorization;

  if(!token){
    res.status(401).send('token missing').end();
    return;
  }else{
    try {
      const payload = jwt.verify(token, 'why');
      req.user=payload;
      console.debug('payload', payload)
    } catch (error) {
      res.status(401).end();
      console.debug(error);
      return;
    }
    
  }
  // console.debug("token",token);
  next();
}


export default guard
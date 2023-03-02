
import { Jwt } from 'jsonwebtoken';

/**
 * 
 * @type {import('express').RequestHandler} 
 */





const guard = (req,res,next) =>{
  const token = req.headers.authorization;

  if(!token) {
    res.status(401).send('Unauthentication');
    return;

  } else{
    try {
      const payload = jwt.verify(token, 'potato');
      console.debug('payload', payload);
    
    }catch(error){
      console.error(error);
      res.status(401).send('token rejected');
      return;
    }
  }
 next();

}

export default guard;
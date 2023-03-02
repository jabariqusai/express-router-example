
import { Jwt } from 'jsonwebtoken';

/**
 * 
 * @type {import('express').RequestHandler} 
 */

const guard = allowdRole =>{
  /**
 * 
 * @type {import('express').RequestHandler} 
 * 
 */
  return (req, res, next)=>{
    const token = req.headers.authorization;

    if(!token) {
      res.status(401).send('Unauthentication');
      return
  
    } else{
      try {
        const payload = jwt.verify(token, 'potato');
        if(allowdRole && payload.role !== allowdRole){
           res.status(403).send('forbidden');
           return;
        }
        console.debug('payload', payload);
      
      }catch(error){
        console.error(error);
        res.status(401).send('token rejected');
        return;
      }
    }
   next();
  }
 

}

export default guard;
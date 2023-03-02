import jwt from 'jsonwebtoken';
/**
 * 
 * @param {string} allowedRole 
 * @returns 
 */
const guard =allowedRole=>{
  /**
 * 
 * @type {import('express').RequestHandler}
 */
  return (req,res ,next)=>{
    const token = req.headers.authorization;
    console.debug('token',token);
    if(!token){
      res.status(401).send('unauthentacted');
      return;
    }else{
      try{
        const payload = jwt.verify(token,"potato"); 
        if(allowedRole && payload.role !== allowedRole) {
          res.status(403).send('forbidden');
          return;
        }
        req.user=payload;
        next();
      }catch(error){
        console.error(error);
        res.status(401).send('token rejected');
        return;
  
      }
    }
}

}
export default guard;
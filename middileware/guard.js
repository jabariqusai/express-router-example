import jwt from 'jsonwebtoken';
/**
 * 
 * @type {import('express').RequestHandler}
 */
const guard =(req,res ,next)=>{
  const token = req.headers.authorization;
  console.debug('token',token);
  if(!token){
    res.status(401).send('unauthentacted');
    return;
  }else{
    try{
      const payload = jwt.verify(token,"potato");  
      req.user=payload;
      next();
    }catch(error){
      console.error(error);
      res.status(401).send('token rejected');
      return;

    }
  }
}
export default guard;
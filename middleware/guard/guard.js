import jwt from 'jsonwebtoken';

const guard = allowedRoles =>{
  return (req, res, next) => {
    console.log("from token");
    
    const token = req.headers.authorization;
     
    console.log(token);
    
    if (!token) {
      res.status(401).send("unauthorized");
      return;
    }
    else {
      try {
        //the payload is the user object which have the username and the other info, including the role info
        const payload = jwt.verify(token, 'tomato');
        
        // check if the user exist and the role is admin, if not the request will be dropped
        if(allowedRoles && payload.role !== allowedRoles){
          
            res.status(403).send('forbidden');
            return;
        }
  
        req.user = payload;
      } catch (error) {
        console.log('error');
        res.status(401).send('unauthorized');
        return;
      }
    }
  
    next();
  };
}
export default guard;

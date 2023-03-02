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
        const payload = jwt.verify(token, 'tomato');
  
        if(allowedRoles && payload.role !== allowedRoles){
          
            res.status(403).send('forbidden');
            return;
        }
        // //check the user if admin or not 
        // if (req.user.role !== 'admin'){
        //   return;
        // }
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

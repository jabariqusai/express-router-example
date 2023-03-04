import jwt from 'jsonwebtoken';

const guard = allowedRoles =>{
  return (req, res, next) => {
    console.log("from token");
    
    //the authorization property in headerssss has the token value, so we stores it into token variable
    const token = req.headers.authorization;
     
    console.log(token);
    
    if (!token) {
      //if there are no token, then the user isn't known
      res.status(401).send("unauthorized");
      return;
    }
    else {
      try {
        //the payload is the user object which have the username and the other info, including the role info
        //verify function in jwt is like the decryption function, it is inverse of the signify function 
        const payload = jwt.verify(token, 'tomato');
        
        // check if the user exist and the role is admin, if not the request will be dropped
        
        //the first parameter in "if" statement tell us if the page has restrictions to be allowed to enter the page, so if there is no allowed roles, the "if" will not be checked, if there is an role, then we will check if the role is the same as admin or not, if not admin, we will drop the request, and send forbidden,if the role is admin, we'll continue the process
          
        if(allowedRoles && payload.role !== allowedRoles){
          
            res.status(403).send('forbidden');
            return;
        }
  
        req.user = payload;
      } catch (error) {
        console.log('error in verify function, there are a token but something wrong in the signature ');
        res.status(401).send('unauthorized');
        return;
      }
    }
  
    next();
  };
}
export default guard;

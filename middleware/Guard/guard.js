import jwt from 'jsonwebtoken';

const guard = allowedRole => {

 return (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send('token is required');
    return;
  }
  
    try {
      const payload = jwt.verify(token, "potato");
  
      if(allowedRole && payload.role !== allowedRole) {
        res.status(403).send('forbidden');
        return
      } 
      req.user = payload;
    } catch (err) {
      res.status(401).send("invalid token");
      return
    }
  
  next();
};
}

export default guard;
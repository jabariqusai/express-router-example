import jwt from 'jsonwebtoken';
const guard = (req, res, next) => {
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
      req.user = payload;
    } catch (error) {
      console.log('error');
      res.status(401).send('unathorized');
      return;
    }
  }

  next();
};
export default guard;

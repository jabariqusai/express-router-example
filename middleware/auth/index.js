import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {

  const payload = jwt.verify(req.headers.authorization, 'abd');
  if (payload) {
    next();
  } else {
    console.log('error');
  }

};

export default auth;
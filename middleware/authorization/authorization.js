import jwt from 'jsonwebtoken';

const authorization = (req, res, next) => {
  const token = req.headers['authorization'] || undefined;
  if (!token) {
    res.status(400).send('token must be sent in request header');
    return;
  }
  try {
    const varefication = jwt.verify(token, 'raghad');
    console.log(varefication);
    next();
  } catch (error) {
    res.status(400).send('invalid token !');
  }
};

export default authorization;
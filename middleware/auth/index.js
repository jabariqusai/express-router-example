import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {

  try {
    const payload = jwt.verify(req.headers.authorization, 'abd');
    const user = payload;
    console.log(user);
    res.status(200).send('done').end();

  } catch (err) {
    console.error(err);
    res.status(400).send('forbidden');
  }
};

export default auth;
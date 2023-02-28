import { Router } from 'express';
import jwt from 'jsonwebtoken';

const passwords = {
  qjabari: '1234',
  abd: '1234'
};

const users = [
  {
    username: 'qjabari',
    firstName: 'Qusai',
    lastName: 'Jabari',
    email: 'qjabari@sadasol.com'
  },
  {
    username: 'abd',
    firstName: 'Abdalazeez',
    lastName: 'Shahateet',
    email: 'abd@sadasol.com'
  }
];

const router = Router();

/**
 * Retrieve an user by id
 */
router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  req.headers.authorization

  const user = users.find(user => user.username === username);
  if (!user || passwords[username] !== password) {
    res.status(400).send('invalid credentials');
  }
  const token = jwt.sign(user, 'abd');
  console.log(jwt.verify(token, 'abd'));
  res.send(token);
});



export default router;
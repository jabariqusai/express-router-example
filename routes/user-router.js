import { Router } from 'express';
import { timeLogger } from '../middleware/index.js';
import jwt from 'jsonwebtoken';
const router = Router();

const passwords = {
  qjabari: '1234',
  mnajar: '4321'
};

const users = [
  {
    username: 'qjabari',
    firstName: 'Qusai',
    lastName: 'Jabari',
    email: 'qjabari@sadasol.com'
  },
  {
    username: 'mnajar',
    firstName: 'Moayed',
    lastName: 'Najar',
    email: 'mnajar@sadasol.com'
  }
];


/**
 * Create a new user
 */
router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(item => item.username === username);
  console.log(user);

  if (!user || passwords[username] !== password) {
    res.status(400).send('username/password not correct!');
    return;
  }

  //create the token 
  const token = jwt.sign(user, 'tomato', { expiresIn: 60 * 5 });
  res.send(token);
  console.log(token);
  res.send('Create user').end();
});



export default router;
import { Router } from 'express';
import jwt from 'jsonwebtoken';

const passwords = {
  qjabari: '1234',
  mnajar: '4321'
};

const users = [
  {
    username: 'qjabari',
    firstName: 'Qusai',
    lastName: 'Jabari',
    email: 'qjabari@sadasol.com',
    role:'admin'
  },
  {
    username: 'mnajar',
    firstName: 'Moayed',
    lastName: 'Najar',
    email: 'mnajar@sadasol.com',
    role:'user'
  }
];

const router = Router();

/**
 * Retrieve an user by id
 */
router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = users.find(user => user.username === username);
  if (!user || passwords[username] !== password) {
    res.status(400).send('invalid username/password');
  }
  const token = jwt.sign(user, 'potato',{expiresIn:60*5});
  res.send({token:token});
});

export default router;
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
    username: 'mnajar',
    firstName: 'Moayed',
    lastName: 'Najar',
    email: 'mnajar@sadasol.com'
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
  const token = jwt.sign(user, 'potato');
  res.send(token);
});

export default router;
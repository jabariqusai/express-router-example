import { Router } from 'express';
import jwt from 'jsonwebtoken';
const router = Router();

const passwords = {
  qjabari: '1234',
  mnajar: '4321'
};

const users = [
  {
    userName: 'qjabari',
    firstName: 'Qusai',
    lastName: 'Jabari',
    email: 'qjabari@sadasol.com',
    role: 'admin'
  },
  {
    userName: 'mnajar',
    firstName: 'Moayed',
    lastName: 'Najar',
    email: 'mnajar@sadasol.com',
    role: 'not admin'
  }
];

/**
 * Login
 */
router.post('/login', (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const user = users.find((user) => user.userName === userName && passwords[userName] === password);
  if (!user) {
    res.status(400).send(`invalid userName/password combination`);
    return;
  }

  const token = jwt.sign(user, 'potato', { expiresIn: 60 * 10 });
  
  res.send(token);
});

export default router;
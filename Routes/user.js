import { Router } from 'express';
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
    email: 'qjabari@sadasol.com',
    role:"admin"
  },
  {
    username: 'mnajar',
    firstName: 'Moayed',
    lastName: 'Najar',
    email: 'mnajar@sadasol.com',
    role:"stu"
  }
];
/**
 * Retrieve an user by id
 */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get user ${id}`);
});

/**
 * Retrieve a list of users
 */
router.get('/', (req, res) => {
  res.send(`List users`);
});

/**
 * Create a new user
 */

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(user => user.username === username);

  if (!user || passwords[username] !== password) {
    res.status(400).send('invalid username or password');
  }
  const token = jwt.sign(user, 'potato');
  res.send(token);
});



/**
 * Update an existing user
 */
router.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update user ${id}`);
});

/**
 * Delete an user by id
 */
router.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete user ${id}`);
});

export default router;
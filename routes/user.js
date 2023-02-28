import { Router } from 'express';
import Jwt from 'jsonwebtoken';


const router = Router();

const passwords = {
  qjabari: '1234',
  mnajar: '4321',
  lanaQ: '12375'
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
  },
  {
    username: 'lanaQ',
    firstName: 'Lana',
    lastName: 'Qawasmy',
    email: 'lana@sadasol.com'
  }
];

/**
 * Login endpoint. Returns a JSON web token.
 */
router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(item => item.username === username);

  if (!user || passwords[username] !== password) {
    res.status(400).send("Incorrect username / password !");
  }
  // token part
});


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
 * Update an existing user
 */
router.put('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update user ${id}`);
});

/**
 * Delete an user by id
 */
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete user ${id}`);
});


export default router;
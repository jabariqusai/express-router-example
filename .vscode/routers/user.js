import { Router } from 'express';
import { Jwt } from 'jsonwebtoken';

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
router.post('/', (req, res) => {
  res.send('Create user');
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
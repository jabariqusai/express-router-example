import { Router } from 'express';
import { timeLogger } from '../middleware/index.js';

const router = Router();



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
router.get('/', timeLogger, (req, res, next) => {
  res.send(`List users`);
  next();
}, timeLogger);

/**
 * Create a new user
 */
router.post('/', (req, res) => {
  res.send('Create user');
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
import { Router } from 'express';

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
router.put('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update user ${id}`);
});

/**
 * Delete an user by id
 */
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});


export default router;
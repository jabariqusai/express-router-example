import { Router } from 'express';

const router = Router() ;

/**
 * Retrieve an user by id
 */
router.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get user ${id}`);
});

/**
 * Retrieve a list of users
 */
router.get('/user', (req, res) => {
  res.send(`List users`);
});

/**
 * Create a new user
 */
router.post('/user', (req, res) => {
  res.send('Create user');
});

/**
 * Update an existing user
 */
router.post('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update user ${id}`);
});

/**
 * Delete an user by id
 */
router.post('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete user ${id}`);
});

export default router ;
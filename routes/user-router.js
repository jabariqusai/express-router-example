import { Router } from 'express';

const router = Router();



/**
 * Retrieve an user by id
 */
app.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get user ${id}`);
});

/**
 * Retrieve a list of users
 */
app.get('/', (req, res) => {
  res.send(`List users`);
});

/**
 * Create a new user
 */
app.post('/', (req, res) => {
  res.send('Create user');
});

/**
 * Update an existing user
 */
app.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update user ${id}`);
});

/**
 * Delete an user by id
 */
app.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});


export default router;
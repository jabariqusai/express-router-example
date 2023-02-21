import { Router } from 'express';

const router = Router();



/**
 * Retrieve an user by id
 */
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get user ${id}`);
});

/**
 * Retrieve a list of users
 */
app.get('/user', (req, res) => {
  res.send(`List users`);
});

/**
 * Create a new user
 */
app.post('/user', (req, res) => {
  res.send('Create user');
});

/**
 * Update an existing user
 */
app.post('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update user ${id}`);
});

/**
 * Delete an user by id
 */
app.post('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});


export default router;
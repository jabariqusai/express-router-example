
import { Router } from 'express';

const routes = Router();
/**
 * Retrieve an user by id
 */
routes.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get user ${id}`);
});

/**
 * Retrieve a list of users
 */
routes.get('/user', (req, res) => {
  res.send(`List users`);
});

/**
 * Create a new user
 */
routes.post('/user', (req, res) => {
  res.send('Create user');
});

/**
 * Update an existing user
 */
routes.post('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update user ${id}`);
});

export default routes;
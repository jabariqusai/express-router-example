import { Router } from 'express';

const routes = Router();

/**
 * Retrieve an magazine by id
 */
routes.get('/magazine/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get magazine ${id}`);
});

/**
 * Retrieve a list of magazines
 */
routes.get('/magazine', (req, res) => {
  res.send(`List magazines`);
});

/**
 * Create a new magazine
 */
routes.post('/magazine', (req, res) => {
  res.send('Create magazine');
});

/**
 * Update an existing magazine
 */
routes.post('/magazine/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update magazine ${id}`);
});

/**
 * Delete an magazine by id
 */
routes.post('/magazine/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete magazine ${id}`);
});

export default routes;
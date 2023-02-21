import { Router } from 'express';

const routes = Router();


routes.post('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});

/**
 * Retrieve an favorite by id
 */
routes.get('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get favorite ${id}`);
});

/**
 * Retrieve a list of favorites
 */
routes.get('/favorite', (req, res) => {
  res.send(`List favorites`);
});

/**
 * Create a new favorite
 */
routes.post('/favorite', (req, res) => {
  res.send('Create favorite');
});

/**
 * Update an existing favorite
 */
routes.post('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update favorite ${id}`);
});

/**
 * Delete an favorite by id
 */
routes.post('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});

export default routes;
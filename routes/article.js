import { Router } from 'express';


const routes = Router();
/**
 * Retrieve an article by id
 */
routes.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get article ${id}`);
});

/**
 * Retrieve a list of articles
 */
routes.get('/', (req, res) => {
  res.send(`List articles`);
});

/**
 * Create a new article
 */
routes.post('/', (req, res) => {
  res.send('Create article');
});

/**
 * Update an existing article
 */
routes.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update article ${id}`);
});

/**
 * Delete an article by id
 */
routes.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete article ${id}`);
});

export default routes;


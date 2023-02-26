import { Router } from 'express';
import { TimeLogger } from './../middleware/index.js';

const routes = Router();


routes.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
  
});

/**
 * Retrieve an favorite by id
 */
routes.get('/:id',TimeLogger, (req, res,next) => {
  const id = req.params.id;
  res.send(`Get favorite ${id}`);
  next()
},TimeLogger);

/**
 * Retrieve a list of favorites
 */
routes.get('/', (req, res) => {
  res.send(`List favorites`);
});

/**
 * Create a new favorite
 */
routes.post('/', (req, res) => {
  res.send('Create favorite');
});

/**
 * Update an existing favorite
 */
routes.put('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update favorite ${id}`);
});

/**
 * Delete an favorite by id
 */
routes.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});

export default routes;
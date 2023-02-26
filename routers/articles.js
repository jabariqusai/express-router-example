import { Router } from 'express';
import { timeLogger } from '../middleware/index.js';

const router = Router();

/**
 * Retrieve an article by id
 */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get article ${id}`);
});

/**
 * Retrieve a list of articles
 */
router.get('/', (req, res) => {
  res.send(`List articles`);
});

/**
 * Create a new article
 */
router.post('/', timeLogger, (req, res , next) => {
  res.send('Create article');
  next(); //this endpoint is a middleware so I have to add (next()) in order to move to the next middleware
}, timeLogger);    // any chain of functions that accepts req , res , next parameters are by default (a middleware chain) 

/**
 * Update an existing article
 */
router.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update article ${id}`);
});

/**
 * Delete an article by id
 */
router.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete article ${id}`);
});

export default router;
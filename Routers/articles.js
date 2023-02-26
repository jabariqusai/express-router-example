import { Router } from 'express';
import timeLogger from '../middleware/time-logger/index.js';

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
router.post('/',timeLogger, (req, res , next) => {
  res.send('Create article');
  next();
},timeLogger);

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
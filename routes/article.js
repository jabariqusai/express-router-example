import { Router } from 'express';
import HttpError from '../class/httpError.js';
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
router.get('/', timeLogger, (req, res, next) => {
  res.send(`List articles`);
  next();
}, timeLogger);

/**
 * Create a new article
 */
router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title) {
    new HttpError('title is required');
  }
  res.end();
  // res.send('Create article');
});

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
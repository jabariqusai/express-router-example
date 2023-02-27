import { Router } from 'express';
import { HttpErrorHandler } from '../middleware/index.js';
import HttpError from '../classes/http-error.js';
const router = Router();

/**
 * Retrieve an article by id
 */
router.get('/:id', (req, res) => {
  console.log('getting article');
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
router.post('/', (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title) {
      return next(new HttpError(400, 'title is required'));
    }
    if (!content) {
      return next(new HttpError(400, 'content is required'));
    }
  } catch {
    return next(new HttpError());
  }

  res.send('Create article');
}, HttpErrorHandler);

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
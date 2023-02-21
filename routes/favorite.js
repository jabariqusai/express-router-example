import { Router } from 'express';

const router = Router();

/**
 * Retrieve an favorite by id
 */
router.get('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get favorite ${id}`);
});

/**
 * Retrieve a list of articles
 */
router.get('/favorite', (req, res) => {
  res.send(`List articles`);
});

/**
 * Create a new favorite
 */
router.post('/favorite', (req, res) => {
  res.send('Create favorite');
});

/**
 * Update an existing favorite
 */
router.post('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update favorite ${id}`);
});

/**
 * Delete an favorite by id
 */
router.post('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});

export default router;

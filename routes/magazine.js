import { Router } from 'express';

const router = Router();

/**
 * Retrieve an magazine by id
 */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get magazine ${id}`);
});

/**
 * Retrieve a list of articles
 */
router.get('/', (req, res) => {
  res.send(`List articles`);
});

/**
 * Create a new magazine
 */
router.post('/', (req, res) => {
  res.send('Create magazine');
});

/**
 * Update an existing magazine
 */
router.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update magazine ${id}`);
});

/**
 * Delete an magazine by id
 */
router.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete magazine ${id}`);
});

export default router;

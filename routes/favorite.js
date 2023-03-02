import { Router } from 'express';

const router = Router();
const favorites = {
  qjabari: 'han',
  mnajar: 'nah'
};


/**
 * Retrieve an favorite by id
 */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get favorite ${id}`);
});

/**
 * Retrieve a list of articles
 */
router.get('/', (req, res) => {
  res.send(favorites[req.user.username]);
});

/**
 * Create a new favorite
 */
router.post('/', (req, res) => {
  res.send('Create favorite');
});

/**
 * Update an existing favorite
 */
router.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update favorite ${id}`);
});

/**
 * Delete an favorite by id
 */
router.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});

export default router;

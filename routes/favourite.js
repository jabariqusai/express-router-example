import { Router } from 'express';

const router = Router();

/**
 * Delete an user by id
 */
router.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});

/**
 * Retrieve an favorite by id
 */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get favorite ${id}`);
});

/**
 * Retrieve a list of favorites
 */
router.get('/', (req, res) => {
  res.send(`List favorites`);
});

/**
 * Create a new favorite
 */
router.post('/', (req, res) => {
  res.send('Create favorite');
});


export default router;
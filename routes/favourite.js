import { Router } from 'express';

const router = Router();

const favorites = {
  'abd': ['ice coffee', 'drugs'],
};

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
  console.log('user', req.user);
  const user = req.user;
  res.send(favorites[user.username]).end();
});

/**
 * Create a new favorite
 */
router.post('/', (req, res) => {
  res.send('Create favorite');
});


export default router;
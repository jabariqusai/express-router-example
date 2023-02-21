import { Router } from 'express';

const Favorites =()=>{


const router= Router();

/**
 * Retrieve an Favorites by id
 */
router.get('/favorites/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get favorites ${id}`);
});

/**
 * Retrieve a list of favorites
 */
router.get('/favorites', (req, res) => {
  res.send(`List favorites`);
});

/**
 * Create a new favorites
 */
router.post('/favorites', (req, res) => {
  res.send('Create favorites');
});

/**
 * Update an existing favorites
 */
router.post('/favorites/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update favorites ${id}`);
});

/**
 * Delete an favorites by id
 */
router.post('/favorites/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorites ${id}`);
});

}
export default Favorites;
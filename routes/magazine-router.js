import { Router } from 'express';

const router = Router();

/**
 * Retrieve an magazine by id
 */
app.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get magazine ${id}`);
});

/**
 * Retrieve a list of magazines
 */
app.get('/', (req, res) => {
  res.send(`List magazines`);
});

/**
 * Create a new magazine
 */
app.post('/', (req, res) => {
  res.send('Create magazine');
});

/**
 * Update an existing magazine
 */
app.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update magazine ${id}`);
});

/**
 * Delete an magazine by id
 */
app.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete magazine ${id}`);
});


export default router;
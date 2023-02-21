import { Router } from 'express';

const router = Router();

/**
 * Retrieve an favorite by id
 */
app.get('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get favorite ${id}`);
});

/**
 * Retrieve a list of favorites
 */
app.get('/favorite', (req, res) => {
  res.send(`List favorites`);
});

/**
 * Create a new favorite
 */
app.post('/favorite', (req, res) => {
  res.send('Create favorite');
});

/**
 * Update an existing favorite
 */
app.post('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update favorite ${id}`);
});

/**
 * Delete an favorite by id
 */
app.post('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});


export default router;
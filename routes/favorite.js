import { Router } from 'express';

const router = Router();

/**
 * Retrieve an magazine by id
 */
router.get('/magazine/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get magazine ${id}`);
});

/**
 * Retrieve a list of magazines
 */
router.get('/magazine', (req, res) => {
  res.send(`List magazines`);
});

/**
 * Create a new magazine
 */
router.post('/magazine', (req, res) => {
  res.send('Create magazine');
});

/**
 * Update an existing magazine
 */
router.post('/magazine/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update magazine ${id}`);
});

/**
 * Delete an magazine by id
 */
router.post('/magazine/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete magazine ${id}`);
});

/**
 * Retrieve an user by id
 */
router.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get user ${id}`);
});

/**
 * Retrieve a list of users
 */
router.get('/user', (req, res) => {
  res.send(`List users`);
});

/**
 * Create a new user
 */
router.post('/user', (req, res) => {
  res.send('Create user');
});

/**
 * Update an existing user
 */
router.post('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update user ${id}`);
});

/**
 * Delete an user by id
 */
router.post('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});

/**
 * Retrieve an favorite by id
 */
router.get('/favorite/:id', (req, res) => {
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

export default router
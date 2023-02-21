import express from 'express';

const PORT = 3001;

const app = express();

/**
 * Retrieve an article by id
 */
app.get('/article/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get article ${id}`);
});

/**
 * Retrieve a list of articles
 */
app.get('/article', (req, res) => {
  res.send(`List articles`);
});

/**
 * Create a new article
 */
app.post('/article', (req, res) => {
  res.send('Create article');
});

/**
 * Update an existing article
 */
app.post('/article/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update article ${id}`);
});

/**
 * Delete an article by id
 */
app.post('/article/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete article ${id}`);
});

/**
 * Retrieve an magazine by id
 */
app.get('/magazine/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get magazine ${id}`);
});

/**
 * Retrieve a list of magazines
 */
app.get('/magazine', (req, res) => {
  res.send(`List magazines`);
});

/**
 * Create a new magazine
 */
app.post('/magazine', (req, res) => {
  res.send('Create magazine');
});

/**
 * Update an existing magazine
 */
app.post('/magazine/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update magazine ${id}`);
});

/**
 * Delete an magazine by id
 */
app.post('/magazine/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete magazine ${id}`);
});

/**
 * Retrieve an user by id
 */
app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get user ${id}`);
});

/**
 * Retrieve a list of users
 */
app.get('/user', (req, res) => {
  res.send(`List users`);
});

/**
 * Create a new user
 */
app.post('/user', (req, res) => {
  res.send('Create user');
});

/**
 * Update an existing user
 */
app.post('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update user ${id}`);
});

/**
 * Delete an user by id
 */
app.post('/favorite/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});

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

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
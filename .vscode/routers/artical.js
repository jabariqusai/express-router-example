
const articalRouter = ()=>{
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
}

export default articalRouter
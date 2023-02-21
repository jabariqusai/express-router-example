import { Router } from 'express';

const articles =()=>{


const router= Router();

/**
 * Retrieve an article by id
 */
router.get('/article/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get article ${id}`);
});

/**
 * Retrieve a list of articles
 */
router.get('/article', (req, res) => {
  res.send(`List articles`);
});

/**
 * Create a new article
 */
router.post('/article', (req, res) => {
  res.send('Create article');
});

/**
 * Update an existing article
 */
router.post('/article/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update article ${id}`);
});

/**
 * Delete an article by id
 */
router.post('/article/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete article ${id}`);
});

}
export default articles
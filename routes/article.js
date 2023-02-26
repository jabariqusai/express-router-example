import { Router } from 'express';
import { TimeLogger } from '../middlewares/index.js'
const router = Router();

/**
 * Retrieve an article by id
 */
router.get('/article/:id',TimeLogger, (req, res, next) => {
  const id = req.params.id;
  res.send(`Get article ${id}`);
  next();
},TimeLogger);

/**
 * Retrieve a list of articles
 */
router.get('/',TimeLogger, (req, res, next) => {
  res.send(`List articles`);
  next();
},TimeLogger);

/**
 * Create a new article
 */
router.post('/',TimeLogger, (req, res, next) => {
  res.send('Create article');
  next()
},TimeLogger);

/**
 * Update an existing article
 */
router.post('/:id', TimeLogger, (req, res, next) => {
  const id = req.params.id;
  res.send(`Update article ${id}`);
  next()
},TimeLogger);

/**
 * Delete an article by id
 */
router.post('/:id',TimeLogger, (req, res, TimeLogger) => {
  const id = req.params.id;
  res.send(`Delete article ${id}`);
  next();
},TimeLogger);

export default router;

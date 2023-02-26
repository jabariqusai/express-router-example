import { Router } from 'express';
import httpError from '../classes/handle-error/http-error.js';
import { TimeLogger } from '../middlewares/index.js';
const router = Router();

/**
 * Retrieve an article by id
 */
router.get('/:id',TimeLogger, (req, res, next) => {
  const id = req.params.id;
  res.status(200).send(`Get article ${id}`);
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
  try {
    const {title, content} = req.body;
    if(!title){
      return next (new httpError('Title missing', 400 ));
    }
    
    if(!content){
      return next (new httpError('Content missing', 400 ));
    }
  } catch (error) {
    next(error)
  }
  res.send(`Update article ${id}`);
  next();
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

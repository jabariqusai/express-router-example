import { Router } from 'express';
import HttpError from '../class/http-error.js';
import timeLogger from '../middileware/timeLogger/index.js';

const articles = () => {


  const router = Router();

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
  router.post('/', timeLogger, (req, res, next) => {
    // title, content
    try {
      const { title, content } = req.body;
      if (!title) {
        // status code 400 Bad Request
        return next(new HttpError('title is required', 400));
      }
  
      if (!content) {
        // status code 400 Bad Request
        return next(new HttpError('content is required', 400));
      }
      const lines = content.split('\n').join('<br>');
      // instance of Error
    } catch (error) {
      next(error);
    }
    // store
    res.send('Create article');
    next();
  }, timeLogger);
  
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
export default articles;

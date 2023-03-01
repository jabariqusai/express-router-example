import { Router } from 'express';
import { timeLogger } from '../middleware/index.js';

const router = Router();

/**
 * Retrieve an article by id
 */
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    next(new HTTPError('i want to use the error', 500));
    try {
        const body = req.body;

    } catch (err) {
        // here we don't throws the object of http error because they are extends Error class
        next(err);
    }
    res.send(`Get article ${id}`);
});

/**
 * Retrieve a list of articles
 */
router.get('', timeLogger, (req, res, next) => {

    res.send(`List articles`);
}, timeLogger);

/**
 * Create a new article
 */
router.post('/', (req, res) => {
    res.send('Create article');
});

/**
 * Update an existing article
 */
router.post('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Update article ${id}`);
});

/**
 * Delete an article by id
 */
router.post('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Delete article ${id}`);
});

export default router;
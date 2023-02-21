import { Router } from "express";

const route = Router();

/**
* Retrieve an article by id
*/
route.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Get article ${id}`);
});

/**
 * Retrieve a list of articles
 */
route.get('/', (req, res) => {
    res.send(`List articles`);
});

/**
 * Create a new article
 */
route.post('/', (req, res) => {
    res.send('Create article');
});

/**
 * Update an existing article
 */
route.post('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Update article ${id}`);
});

/**
 * Delete an article by id
 */
route.post('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Delete article ${id}`);
});


export default route;
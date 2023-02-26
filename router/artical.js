import { Router } from "express";
import { Timelogger } from "../middleware/index.js";
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
//بضل احط نيكست من واحد لواحد واخر شي بدون نيكست 
route.post('/', Timelogger,(req, res,next) => {
    res.send('Create article');
    next()
},
//هون لما يدخلها الtimetogle بروح خارج ال if وفش فيها نيكس 
Timelogger);



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
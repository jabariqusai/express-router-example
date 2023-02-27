import { Router } from "express";
import HttpError from "./classes/http.error.js";
import { Timelogger,logger } from "../middleware/index.js";
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
    try{
        const {title,content} = req.body;
        if(!title){
            return next( new HttpError ('title is required',400))
            
        }
        if(!content){
            
            return next( new HttpError ('content is required',400))
        }
        const line =  content.split('\n').join('<br>');

    }
    catch(err){
    next(err);
    }


    res.send('Create article');
    next()
},
//هون لما يدخلها الtimetogle بروح خارج ال if وفش فيها نيكس 
Timelogger);



/**
 * Update an existing article
 */
route.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Update article ${id}`);
});

/**
 * Delete an article by id
 */
route.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Delete article ${id}`);
});


export default route;
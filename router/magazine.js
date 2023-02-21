import { Router } from "express";

const route = Router();


/**
 * Retrieve an magazine by id
 */
route.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Get magazine ${id}`);
  });
  
  /**
   * Retrieve a list of magazines
   */
  route.get('/', (req, res) => {
    res.send(`List magazines`);
  });
  
  /**
   * Create a new magazine
   */
  route.post('/', (req, res) => {
    res.send('Create magazine');
  });
  
  /**
   * Update an existing magazine
   */
  route.post('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Update magazine ${id}`);
  });
  
  /**
   * Delete an magazine by id
   */
  route.post('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Delete magazine ${id}`);
  });
  export default route;
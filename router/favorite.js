import { Router } from "express";

const route = Router();
/**
 * Retrieve an favorite by id
 */
route.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Get favorite ${id}`);
  });
  
  /**
   * Retrieve a list of favorites
   */
  route.get('/', (req, res) => {
    res.send(`List favorites`);
  });
  
  /**
   * Create a new favorite
   */
  route.post('/', (req, res) => {
    res.send('Create favorite');
  });
  
  /**
   * Update an existing favorite
   */
  route.post('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Update favorite ${id}`);
  });
  
  /**
   * Delete an favorite by id
   */
  route.post('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Delete favorite ${id}`);
  });
  export default route;
  
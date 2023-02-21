import { Router } from "express";

const route = Router();


/**
 * Retrieve an user by id
 */
route.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Get user ${id}`);
  });
  
  /**
   * Retrieve a list of users
   */
  route.get('/', (req, res) => {
    res.send(`List users`);
  });
  
  /**
   * Create a new user
   */
  route.post('/', (req, res) => {
    res.send('Create user');
  });
  
  /**
   * Update an existing user
   */
  route.post('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Update user ${id}`);
  });
  
  /**
   * Delete an user by id
   */

  export default route;
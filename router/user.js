import { Router } from "express";
import jwt from 'jsonwebtoken'//step1
const route = Router();

//step 2
const passwords = {
  qjabari: '1234',
  sajeda: '4321'
};
const users = [
  {
    username: 'qjabari',
    firstName: 'Qusai',
    lastName: 'Jabari',
    email: 'qjabari@sadasol.com',
    role:'user'
  },
  {
    username: 'sajeda',
    firstName: 'Sajeda',
    lastName: 'swad',
    email: 'sajeda@sadasol.com',
    role:'admin'
  }
];
//step 3
/**
 * Create a new user
 */
route.post('/login', (req, res) => {
  
    const username = req.body.username;
    const password = req.body.password;
  
    const user = users.find(item => item.username === username)
  
  
    if (!user || passwords[username] !== password){
      res.status(400).send('Incorrect username/password')
      return;
    }
    const token  = jwt.sign(user,'potato',{expiresIn:60*5})//time for seccion
  
    res.send(token)
  
   
});

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
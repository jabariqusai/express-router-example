import { Router } from 'express';

const router = Router();

const passwords = {
  qjabari: '1234',
  mnajar: '4321'
};

const users = [
  {
    username: 'qjabari',
    firstName: 'Qusai',
    lastName: 'Jabari',
    email: 'qjabari@sadasol.com'
  },
  {
    username: 'mnajar',
    firstName: 'Moayed',
    lastName: 'Najar',
    email: 'mnajar@sadasol.com'
  }
];

router.post('/' , (req , res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(users.find(user => user !== username) || passwords.find(pass => pass !== password)) {
       res.status(400).send('Invalid password / username');
    }

    res.send("test")
})

export default router;
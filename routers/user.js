import { Router } from 'express';
import jwt from 'jsonwebtoken';
import secretKey from '../secrets/secrets.js';

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
        email: 'qjabari@sadasol.com',
        roles: ['admin', 'user']
    },
    {
        username: 'mnajar',
        firstName: 'Moayed',
        lastName: 'Najar',
        email: 'mnajar@sadasol.com',
        roles: ['user']
    }
];

/**
 * Retrieve an favorite
 */
router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = users.find(item => item.username === username);
    if (!user || passwords[user.username] !== password) {
        res.status(400).send('Invalid username/password').end();
        return;
    }
    const token = jwt.sign(user, secretKey, { expiresIn: 60 * 60 * 24 * 30 });
    res.send(`the token is ${token}`).end();
});


export default router;
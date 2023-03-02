import { Router } from 'express';

const router = Router();

const favorite = {
    'momen': ['rice', 'chicken', 'meat'],
    'abd': ['rice'],
    'qjabari': ['ice-cream']
};

/**
 * Retrieve an favorite
 */
router.get('/', (req, res) => {
    res.send(favorite[req.payload.username]).end();
});


export default router;
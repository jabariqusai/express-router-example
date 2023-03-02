import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('Welcome admin');
});

router.post('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

router.put('/', (req, res) => {

});

export default router;
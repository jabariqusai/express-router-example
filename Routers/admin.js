
import { Router } from 'express';

const router = Router();

router.get('/self-destruct', (req, res) => {
  res.send('Initiating self-destruction');
});

router.get('/fire-rockets', (req, res) => {
  res.send('Firing rockets');
});

router.get('/delete-database', (req, res) => {
  res.send('Database deleted');
});

export default router;
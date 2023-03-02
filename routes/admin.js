import { Router } from 'express';
const router = Router();

/**
 * Login
 */
router.get('/', (req, res) => {
  console.log('req.user', req.user);
  if (req.user.role !== 'admin') {
    res.status(401).send('you are not allowed in here');
    return;
  }
  res.send('you are an admin');
});

export default router;
import { Router } from 'express';
const router = Router();

router.use((req, res, next) => {
  if (req.user.role !== 'admin') {
    res.status(401).send('you are not allowed in here');
    return;
  }
  next();
})

/**
 * Login
 */
router.get('/', (req, res) => {
  
  res.send('you are an admin');
});

export default router;
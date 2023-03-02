import { Router } from 'express';
import timeLogger from '../middleware/time-logger/index.js';

const router = Router();

const favorites = {
  qjabari: ['icecream'],
  mnajar: ['vegetables'],
  lanaQ: ['chocolate']
};

router.use ((req, res , next) => {
console.debug("From favorite router");

next();
});
/**
 * Retrieve an favorite by id
 */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get favorite ${id}`);
});

/**
 * Retrieve a list of favorites
 */
router.get('/', (req, res) => {
  res.send(favorites[req.user.username]);

});

/**
 * Create a new favorite
 */
router.post('/', timeLogger, (req, res, next) => {
  res.send('Create favorite');
  next();
}, timeLogger);

/**
 * Update an existing favorite
 */
router.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update favorite ${id}`);
});

/**
 * Delete an favorite by id
 */
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});


export default router;
import { Router } from 'express';

const router = Router();
const fav = {
  qjabari: ["potato"],
  mnajar: ["tomato"]
};

router.use((res, req, next) => {
  console.log("From Fav router");
  next();
})

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
  res.send(fav[req.user.username])

});

/**
 * Create a new favorite
 */
router.post('/', (req, res) => {
  res.send('Create favorite');
});

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
router.post('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete favorite ${id}`);
});

export default router;
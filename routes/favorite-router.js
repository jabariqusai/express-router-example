import { Router } from 'express';

const router = Router();
const favorites = {

  qjabari : ['cats'],
  mnajar : ['hacking']

}

router.use((req,res,next)=>{
  console.log("from favorite");
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
  const userFavorite = req.user.username ;
  const favorite =  favorites[userFavorite];
  res.send(favorite).end(); 
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
router.put('/:id', (req, res) => {
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
import { Router } from 'express';

const Magazine =()=>{


const router= Router();

/**
 * Retrieve an magazine by id
 */
router.get('/magazine/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Get magazine ${id}`);
});

/**
 * Retrieve a list of magazine
 */
router.get('/magazine', (req, res) => {
  res.send(`List magazine`);
});

/**
 * Create a new magazine
 */
router.post('/magazine', (req, res) => {
  res.send('Create magazine');
});

/**
 * Update an existing magazine
 */
router.post('/magazine/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update magazine ${id}`);
});

/**
 * Delete an magazine by id
 */
router.post('/magazine/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete magazine ${id}`);
});

}
export default Magazine;
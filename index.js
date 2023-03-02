import express from 'express';
import { authorization, errorHandeling, logger } from './middleware/index.js';
import { articleRouter, magazineRouter, userRouter, favoriteRouter, adminRouter } from './routers/index.js';

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(logger);
app.use('/article', authorization(['READER']), articleRouter);
app.use('/magazine', magazineRouter);
app.use('/user', userRouter);
app.use('/favorite', authorization(), favoriteRouter);
app.use('/admin', authorization(['ADMIN']), adminRouter);
app.use(errorHandeling);

// console.log (app._router.stack) to print system stack 
app.listen(PORT, () => console.debug('Server is listening on port', PORT));
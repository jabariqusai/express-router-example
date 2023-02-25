import express from 'express';
import { articalRouter,favoriteRouter,magazineRouter,userRouter } 
from './router/index.js';

const PORT = 3001;

const app = express();


app.use('/article',articalRouter);
app.use('/magazine',magazineRouter);
app.use('/user',userRouter);
app.use('/favorite',favoriteRouter);


app.listen(PORT, () => console.debug('Server is listening on port', PORT));
import express from 'express';
import articleRouter from './routes/article-router.js';
import magazineRouter from './routes/magazine-router.js';
import userRouter from './routes/user-router.js';
import favoriteRouter from './routes/favorite-router.js';

const PORT = 3001;

const app = express();
app.use('/article',articleRouter);
app.use('/magazine',magazineRouter);
app.use('/user',userRouter);
app.use('/favorite',favoriteRouter);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
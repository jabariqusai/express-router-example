import express from 'express';
import articleRouter from './routes/article.js';
import userRouter from './routes/user.js';
import favoriteRouter from './routes/favorite.js';
import magazineRouter from './routes/magazine.js';

const PORT = 3001;

const app = express();
app.use('/article', articleRouter);
app.use('/favorite', favoriteRouter);
app.use('/magazine', magazineRouter);
app.use('/user', userRouter);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
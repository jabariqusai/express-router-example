import express from 'express';
import articleRouter from './routers/article.js';
import userRouter from './routers/user.js';
import magazineRouter from './routers/magazine.js';
import favoriteRouter from './routers/favorite.js';
const PORT = 3001;

const app = express();
app.use('/article', articleRouter);
app.use('/user', userRouter);
app.use('/magazine', magazineRouter);
app.use('/favorite', favoriteRouter);


app.listen(PORT, () => console.debug('Server is listening on port', PORT));
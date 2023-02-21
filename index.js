import express from 'express';
import articleRouter from './routers/articles.js';
import magazineRouter from './routers/magazine.js';
import userRouter from './routers/user.js';
import favoriteRouter from './routers/favorite.js';

const PORT = 3001;

const app = express();
app.use(articleRouter);
app.use(magazineRouter);
app.use(userRouter);
app.use(favoriteRouter);


app.listen(PORT, () => console.debug('Server is listening on port', PORT));
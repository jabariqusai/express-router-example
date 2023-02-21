import express from 'express';
import articleRouter from './routes/article.js';
import userRouter from './routes/user.js';
import favoriteRouter from './routes/favorite.js';
import magazineRouter from './routes/magazine.js';

const PORT = 3001;

const app = express();
app.use(articleRouter);
app.use(favoriteRouter);
app.use(magazineRouter);
app.use(userRouter);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
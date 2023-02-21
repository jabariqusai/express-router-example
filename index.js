import express from 'express';
import articleRouter from './routes/article.js'
import magazineRouter from './routes/magazine.js'
import userRouter from './routes/user.js'
import favoriteRouter from './routes/favorite.js'
const PORT = 3001;

const app = express();

app.use(articleRouter);
app.use(magazineRouter);
app.use(userRouter);
app.use(favoriteRouter);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
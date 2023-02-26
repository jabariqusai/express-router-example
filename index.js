import express from 'express';
import articleRouter from './routes/article.js'
import magazineRouter from './routes/magazine.js'
import userRouter from './routes/user.js'
import favoriteRouter from './routes/favorite.js'
import { Logger } from './middlewares/index.js'

const PORT = 3001;

const app = express();
app.use(express.json());

app.use(Logger);
app.use('/article',articleRouter);
app.use('/magazine', magazineRouter);
app.use('/user' ,userRouter);
app.use('/favorite', favoriteRouter);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
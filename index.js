import express from 'express';
import articleRouter from './router/article.js';
import magazineRouter from './router/magazine.js';
import favoritsRouter from './router/favorits.js';
import userRouter from './router/user.js';
const PORT = 3001;

const app = express();
app.use(articleRouter);
app.use(magazineRouter);
app.use(favoritsRouter);
app.use(userRouter);
app.listen(PORT, () => console.debug('Server is listening on port', PORT));
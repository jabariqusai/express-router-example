import express from 'express';
import { errorHandling, logger } from './middlewarse/index.js';
import { articleRouter, favoriteRouter, magazineRouter, userRouter } from './routers/index.js';

const PORT = 3002;
const app = express();

app.use(express.json);
app.use(logger);
app.use('/article', articleRouter);
app.use('/favorite', favoriteRouter);
app.use('/magazine', magazineRouter);
app.use('/user', userRouter);
app.use(errorHandling);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
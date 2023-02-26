import express from 'express';
import { logger, errorHandling } from './middleware/index.js';
import { articleRouter, magazineRouter, userRouter, favoriteRouter } from './routes/index.js';

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(logger);
app.use('/article', articleRouter);
app.use('/magazine', magazineRouter);
app.use('/user', userRouter);
app.use('/favorite', favoriteRouter);
app.use(errorHandling);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
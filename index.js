import express from 'express';
import { guard, logger } from './middlewarse/index.js';
import {articleRouter, favoriteRouter, magazineRouter, userRouter, adminRouter} from './routers/index.js';

const PORT = 3002;
const app = express();

app.use(express.json());
app.use('/article', articleRouter);
app.use(logger);
app.use('/user', userRouter);
app.use('/magazine', magazineRouter);
app.use('/favorite',guard(), favoriteRouter);
app.use('/admin',guard('admin'),adminRouter);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
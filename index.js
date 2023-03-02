import express from 'express';
import guard from './middileware/guard.js';
import logger from './middileware/logger/logger.js';
import { articleRouter, magazineRouter, userRouter, favoriteRouter ,adminRouter} from './routes/index.js';

const PORT = 3001;
const app = express();
app.use(express.json());
app.use(logger);

app.use('/article', articleRouter);
app.use('/magazine', magazineRouter);
app.use('/user', userRouter);

app.use('/favorite',guard(), favoriteRouter);
app.use('/admin',guard('admin'),adminRouter);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
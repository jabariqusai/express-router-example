import express from 'express';
import { articleRouter } from './.vscode/routers';
import { magazineRouter } from './.vscode/routers';
import { userRouter } from './.vscode/routers';
import { favoriteRouter } from './.vscode/routers';
import { admin } from './.vscode/routers';
import logger from './.vscode/middlewares/logger';
import { timeLogger } from './.vscode/middlewares';
import guard from './.vscode/middlewares/time-logger/guard';


const app = express();

app .use(logger)
app .use(timeLogger)
app .use('/artical', articleRouter);
app .use('/magazine', magazineRouter);
app .use('/user', userRouter);
app .use('/favorit',guard, favoriteRouter);
app .use('/admin',guard('admin'), admin);

const PORT = 3003;

app.listen(PORT, () => console.debug('Server is listening on port', PORT));hiuiu
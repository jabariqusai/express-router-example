import express from 'express';
import articalRouter from './.vscode/routers/artical';
import magazineRouter from './.vscode/routers/magazine';
import userRouter from './.vscode/routers/user';
import favoriteRouter from './.vscode/routers/favorite';
import logger from './.vscode/middlewares/logger';
import { timeLogger } from './.vscode/middlewares';
import guard from './.vscode/middlewares/time-logger/guard';


const app = express();

app .use(logger)
app .use(timeLogger)
app .use('/artical', articalRouter);
app .use('/magazine', magazineRouter);
app .use('/user', userRouter);
app .use('/favorit',guard, favoriteRouter);


const PORT = 3003;

app.listen(PORT, () => console.debug('Server is listening on port', PORT));hiuiu
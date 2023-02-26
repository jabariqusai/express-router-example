import express from 'express';
import articalRouter from './.vscode/routers/artical';
import magazineRouter from './.vscode/routers/magazine';
import userRouter from './.vscode/routers/user';
import favoriteRouter from './.vscode/routers/favorite';



const app = express();

app .use(logger)
app .use('/artical', articalRouter);
app .use('/magazine', magazineRouter);
app .use('/user', userRouter);
app .use('/favorit', favoriteRouter);


const PORT = 3003;

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
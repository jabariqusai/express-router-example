import express from 'express';
import articleRouter from './routes/article.js';
import magazineRouter from './routes/magazine.js';
import userRouter from './routes/user.js';
import favoriteRouter from './routes/favorite.js';
import endpointLogger from './middleware/logger/index.js';
import timeLogger from './middleware/time-logger/index.js';
import guard from './middleware/guard/guard.js'

const PORT = 3001;

const app = express();
app.use(express.json());

// app.use(timeLogger);
app.use(endpointLogger);

app.use('/article', articleRouter);
app.use('/magazine', magazineRouter);
app.use('/user', userRouter);
app.use('/favorite',guard, favoriteRouter);

// app.use(timeLogger);


// to show tree 
//console.log(app._router.stack);
app.listen(PORT, () => console.debug('Server is listening on port', PORT));
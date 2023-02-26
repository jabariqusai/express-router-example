import express from 'express';
import { article, favorite, magazine, user } from './routes/index.js';
import { logger, timeLogger } from './middleware/index.js';
const PORT = 3001;

const app = express();

app.use(logger);
app.use(timeLogger);
app.use('/article', article);
app.use('/favorite', favorite);
app.use('/magazine', magazine);
app.use('/user', user);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
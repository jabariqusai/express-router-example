import express from 'express';
import { article, favorite, magazine, user } from './routes/index.js';
import { logger } from './middleware/index.js';

const app = express();
app.use(express.json());

app.use(logger);
app.use('/user', user);
app.use('/article', article);
app.use('/favorite', favorite);
app.use('/magazine', magazine);


const PORT = 3003;
app.listen(PORT, () => console.debug('Server is listening on port', PORT));
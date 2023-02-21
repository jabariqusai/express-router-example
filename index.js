import express from 'express';
import { article, favorite, magazine, user } from './routers/index.js';
const PORT = 3001;

const app = express();
app.use('/article', article);
app.use('/user', user);
app.use('/magazine', magazine);
app.use('/favorite', favorite);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
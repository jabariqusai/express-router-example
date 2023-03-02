import express from 'express';
import { article, favorite, magazine, user, admin } from './routers/index.js';
import { guard, logger } from './middleware/index.js';

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(logger);

app.use('/article', article);
app.use('/user', user);
app.use('/magazine', magazine);
app.use('/favorite', guard(), favorite);
app.use('/admin', guard('admin'), admin);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
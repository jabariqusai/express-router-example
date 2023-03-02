import express from 'express';
import { article, favorite, magazine, user, admin } from './routes/index.js';
import { logger, auth } from './middleware/index.js';

const app = express();
app.use(express.json());
app.use(logger);
// app.use(auth);
app.use('/admin', auth(['admin']), admin);
app.use('/user', user);
app.use('/article', article);
app.use('/favorite', auth(), favorite);
app.use('/magazine', magazine);


const PORT = 3003;
app.listen(PORT, () => console.debug('Server is listening on port', PORT));
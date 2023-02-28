import express from 'express';
import { article, magazine, user, favorite } from './routes/index.js';
import {logger} from './middleware/index.js';


const PORT = 3001;

const app = express();
app.use(express.json());
app.use(logger);
app.use('/article', article);
app.use('/magazine', magazine);
app.use('/user', user);
app.use('/favorite', favorite);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
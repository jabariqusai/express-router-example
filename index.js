import express from 'express';
import { article, favorite, magazine, user, admin } from './routes/index.js';
import { logger, timeLogger, guard } from './middleware/index.js';
const PORT = 3001;

const app = express();
app.use(express.json());
app.use(logger);
app.use(timeLogger);
app.use('/article', article);
app.use('/favorite', guard, favorite);
app.use('/magazine', magazine);
app.use('/user', user);
app.use('/admin', guard, admin);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
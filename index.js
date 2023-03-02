import express from 'express';
import { logger, guard } from './middleware/index.js';
import { article, magazine, user, favorite ,admin} from './routes/index.js';



const PORT = 3001;

const app = express();
app.use(express.json());
app.use(logger);
app.use('/article', article);
app.use('/magazine', magazine);
app.use('/user', user);
app.use('/favorite', guard(), favorite);
app.use('/admin', guard('admin'), admin);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
import express from 'express';
import { article,magazine,user,favorite } from './routes/index.js';

const PORT = 3001;

const app = express();
app.use(favorite)
app.use(user)
app.use(magazine)
app.use("/article",article)


app.listen(PORT, () => console.debug('Server is listening on port', PORT));
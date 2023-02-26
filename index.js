import express from 'express';
import  {Logger} from './middleware/index.js'
import { article,magazine,user,favorite } from './routes/index.js';

const PORT = 3001;

const app = express();
app.use(Logger)
app.use("/favorite",favorite)
app.use("/user",user)
app.use("/magazine",magazine)
app.use("/article",article)


app.listen(PORT, () => console.debug('Server is listening on port', PORT));
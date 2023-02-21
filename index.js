import express from 'express';
import { articleRoute , magazineRoute , favoriteRouter , userRouter } from './Routers/index.js'

const PORT = 3001;

const app = express();

app.use('/article' , articleRoute)
app.use('/magazine' , magazineRoute)
app.use('/favorite' , favoriteRouter)
app.use('/user' , userRouter)

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
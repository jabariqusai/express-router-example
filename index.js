import express from 'express';
import articleRoute from './Routers/articles.js'
import magazineRoute from './Routers/magazine.js'
import favoriteRouter from './Routers/favorite.js'
import userRouter from './Routers/user.js'

const PORT = 3001;

const app = express();

app.use('/article' , articleRoute)
app.use('/magazine' , magazineRoute)
app.use('/favorite' , favoriteRouter)
app.use('/user' , userRouter)

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
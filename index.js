import express from 'express';
import articleRoute from './Routers/articles.js'
import magazineRoute from './Routers/magazine.js'
import favoriteRouter from './Routers/favorite.js'
import userRouter from './Routers/user.js'

const PORT = 3001;

const app = express();

app.use(articleRoute)
app.use(magazineRoute)
app.use(favoriteRouter)
app.use(userRouter)

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
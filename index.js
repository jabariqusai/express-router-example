import express from 'express';
import articles from './Routes/article.js';
import Favorites from './Routes/favorites.js';
import Magazine from './Routes/magazine.js';
import User from './Routes/user.js';

const app = express();
const PORT = 3001;

app.use(articles);
app.use(Magazine);
app.use(User);
app.use(Favorites);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
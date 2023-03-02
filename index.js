import express from 'express';
import { logger, errorHandling, guard } from './middleware/index.js';
import { articleRouter, magazineRouter, userRouter, favoriteRouter, adminRouter } from './routes/index.js';

const PORT = 3001;

const app = express();

app.use(express.json());
app.use('/article', articleRouter);
app.use(logger);
app.use('/article', errorHandling);
app.use('/magazine', magazineRouter);
app.use('/user', userRouter);
app.use('/favorite', guard(), favoriteRouter);
// Only admin users should access the admin router
app.use('/admin', guard('admin'), adminRouter);

app.listen(PORT, () => console.debug('Server is listening on port', PORT));
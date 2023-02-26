import express from 'express';
import { logger } from './middleware/index.js';

import { articalRouter,favoriteRouter,magazineRouter,userRouter } 
from './router/index.js';

const PORT = 3001;

const app = express();

app.use(logger);
app.use('/article',articalRouter);
app.use('/magazine',magazineRouter);
app.use('/user',userRouter);
app.use('/favorite',favoriteRouter);
//console.log(app._router.stack)
//بشوف كل التسلسل
// app.use((req,res)=>{
//     req.method
// })
app.listen(PORT, () => console.debug('Server is listening on port', PORT));
import express from 'express';
import guard from './middleware/guard.js';
import { logger} from './middleware/index.js';

import { adminRouter, articalRouter,favoriteRouter,magazineRouter,userRouter } 
from './router/index.js';

const PORT = 3007;
console.log("gfdhj");
const app = express();
app.use(express.json())
app.use(logger);
app.use('/article',articalRouter);
app.use('/magazine',magazineRouter);
app.use('/user',userRouter);
app.use('/admin', guard('admin'),adminRouter);
app.use('/favorite',guard(),favoriteRouter);


//console.log(app._router.stack)
//بشوف كل التسلسل
// app.use((req,res)=>{
//     req.method
// })
app.listen(PORT, () => console.debug('Server is listening on port', PORT));
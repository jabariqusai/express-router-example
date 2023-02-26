const logger =(req,res,next)=>{
 console.info(`${req.method} ${req.originalUrl} ${new Date().toISOString()} `)
 next();
}
export default logger;
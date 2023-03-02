const logger =(req,res,next)=>{

  console.info(`${req.method} ${req.originUrl} ${new Date().toISOString()}`);
  next();
  }
  export default logger;
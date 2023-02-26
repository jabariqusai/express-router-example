const Logger = (req, res, next) =>{
  const date = new Date;
  console.info(req.originalUrl, date.toISOString());
  next();
}


export default Logger;
const logger = (req , res , next) => {
  console.info(`${req.method}  ${req.originalurl} ${new Date().toISOString()}`)
  next();
}

export default logger;

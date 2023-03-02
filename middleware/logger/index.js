/**
 * @type {import('express').RequestHandler}
 * 
 */
const endpointLogger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} ${new Date().toISOString()}`);
  next();
};

export default endpointLogger;
const Logger = (req, res, next) => {
  console.info(`${req.method} ${req.url}`);
  next();
};
export default Logger;
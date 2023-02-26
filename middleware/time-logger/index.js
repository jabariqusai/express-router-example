const timelogger = (req, res,next) => {
  if (!res.locals.StartRequest) {
    res.locals.StartRequest = new Date();
    return next();
  }
  const startRequest = res.locals.StartRequest;
  const EndRequest = new Date();
  console.info(`time Elapsed : ${EndRequest - startRequest}`);
};
export default timelogger;
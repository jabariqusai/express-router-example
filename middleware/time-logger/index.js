const timeLogger = (req, res, next) => {
  if (res.locals.time) {
    const currentTime = new Date();
    const elapsedTime = currentTime - res.locals.time;
    console.log("elapsed time:", elapsedTime + 'ms');
    return next();
  }
  res.locals.time = new Date();
  next();
};

export default timeLogger;
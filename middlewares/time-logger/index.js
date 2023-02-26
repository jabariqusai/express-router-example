const TimeLogger = (req, res, next) => {
  if (res.locals.firstTime) {
    const firstTime = res.locals.firstTime;
    const finalTime = new Date();
    console.info('Elapsed Time: ', (finalTime - firstTime), 'ms');
  } else {
    res.locals.firstTime = new Date;
  }
  return next();
};

export default TimeLogger;

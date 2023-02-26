const timeLogger = (req, res, next) => {
  if (res.locals.reqStartDate) {
    const resFirstDate = res.locals.reqStartDate;
    const resFinalDate = new Date();
    console.info(`Elapsed time: ${resFinalDate - resFirstDate}ms`);
    return next();
  }
  res.locals.reqStartDate = new Date();
  next();
};
export default timeLogger;
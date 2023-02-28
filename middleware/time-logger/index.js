const timeLogger = (err, req, res, next) => {
  if (!res.locals.reqStartDate) {
    // first middleware (first step)
    res.locals.reqStartDate = new Date();
    return next(err);
  } else {
    // last middleware (last step)
    const reqFirstDate = res.locals.reqStartDate;
    const reqFinalDate = new Date();
    console.info(`Elapsed time: ${reqFinalDate - reqFirstDate}ms`);
    if (err) {
      next(err);
    }
  }
};

export default timeLogger;
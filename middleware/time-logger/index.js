const timeLogger = (req, res, next) => {

  if (!res.locals.reqStartDate) {
    
    // first middleware (first step)
    res.locals.reqStartDate = new Date();
    return next();

  }

  // last midleware (last step)

  const reqFirstDate = res.locals.reqStartDate;
  const reqFinalDate = new Date();
  console.info(`Elapsed time :  ${reqFinalDate - reqFirstDate} ms`);
};

export default timeLogger;
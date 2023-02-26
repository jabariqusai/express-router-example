const timeLogger = (req, res, next) => {
  if (!res.locals.reqStartDate) {
     res.locals.reqStartDate = new Date();
     return next();
  }

  const reqFirstTime = res.locals.reqStartDate;
  const reqFinalTime = new Date();
  console.info(`Elapsed time : ${reqFinalTime - reqFirstTime}ms`) 
};

export default timeLogger;
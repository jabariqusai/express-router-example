const timeLogger = (req, res, next) => {
  if(!res.locals.reqStartDate){
    res.locals.reqStartDate = new Date();
    return next();
  }

  const reqFirstDate = res.locals.reqStartDate;
  const reqFinalDate = new Date();
  console.log(`Elapsed time = ${reqFinalDate - reqFirstDate} ms`);
};

export default timeLogger;
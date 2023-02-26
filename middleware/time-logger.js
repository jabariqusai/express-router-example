// their method
// const timeLogger = (req, res, next) => {
//   // call this middleware twice (before and after the endpoint)
//   if(!res.locals.reqStartDate) {
//     // first middleware
//     res.locals.reqStartDate = new Date();
//     return next();
//   }
//   // last middleware
//   const reqFirstDate = res.locals.reqStartDate;
//   const reqFinalDate = new Date();
//   console.info(`Duration: ${reqFinalDate - reqFirstDate}`)
// };


// my method
const timeLogger = (req, res, next) => {
  const firstDate = new Date();
  next();
  const lastDate = new Date();
  console.info(`duration: ${lastDate - firstDate} ms`)
};


/*
// a third method
const firstDate = new Date();
  next();

  res.on('finish', () => {
    const lastDate = new Date();
    console.info(`duration: ${lastDate - firstDate} ms`);
  });
*/

export default timeLogger;
const timeLogger = (req, res, next) =>{
 if (res.locals.reqStartTime) {
const reqFirstDate = res.locals.reqStartDate;
const reqFinalDate = new Date();
console.info(`Elapsed time: ${reqFinalDate - reqFirstDate}ms`);
return next();
 }

 
 res.locals.reqStartTime = new Date()
 next();
 console.log('Test')

};

export default timeLogger



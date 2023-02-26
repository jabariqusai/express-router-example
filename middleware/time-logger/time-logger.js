const timeLogger = (error , eq , res , next) => {
  if (!res.locals.reqDate) {
    console.log('sending request');
    res.locals.reqDate = new Date()
    return next()
  }
  console.log('sending response');
  res.locals.resDate = new Date() 
  console.log ("Elapsed Time : " , res.locals.resDate - res.locals.reqDate)
  // next(); // in this case no need to add next() here , 'cause it is the last middleware excuted , but it does not hurt 
  next(error); // now there is another middleware that is executed 
}

export default timeLogger ;
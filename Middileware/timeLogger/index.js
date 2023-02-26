const timeLogger = (req, res, next) => {


    if (!res.locals.reqStartDate) {
        res.locals.reqStartDate = new Date();
        return next();
    }

    const firstDate = res.locals.reqStartDate;
    const finalDate = Date.now();
    console.info(`EndPoint time is : ${finalDate - firstDate}ms`)


}
export default timeLogger;
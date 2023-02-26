const Timelogger =(req ,res,next)=>{
    //اذا مو عاملو من قبل 
    if(!res.locals.reqStartDate){
        //first middlware
        res.locals.reqStartDate= new Date();
        return next();

    }
    //last middlware 
    const reqFirstDate = res.locals.reqStartDate;
    const reqFinalDate = new Date();
    console.info(`Elapsed tome : ${reqFinalDate- reqFirstDate}ms`)
}
export default Timelogger;
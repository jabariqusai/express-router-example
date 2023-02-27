class HttpError extends Error{
    massege;
    statuscode;
    constructor(massege,statuscode){
        super(massege);
        this.massege = massege;
        this.statuscode = statuscode;

        Error.captureStackTrace(this,this.constructor);

    }
}
export default HttpError;
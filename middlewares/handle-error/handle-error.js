import httpError from '../../classes/handle-error/http-error.js';
/**
 * 
 * @param {httpError} err 
 * @param {*} req 
 * @param {*} next 
 */
const ErrorHandler = (err,req, res, next) =>{
  const message = err.message || 'Something went wrong';
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send({
    message,
    statusCode
  });
};


export default ErrorHandler;
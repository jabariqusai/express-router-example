import HttpError from './../../classes/http-error.js';
/**
 * 
 * @param {HttpError} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const errorHandling = (err, req, res, next) => {
  console.log('TEST');
  const message = err.message || 'Something went wrong';
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).send({
    message,
    statusCode
  });
};

export default errorHandling;

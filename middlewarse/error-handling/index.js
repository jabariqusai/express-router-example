import HttpError from '../../classes/http-error';
/**
 * 
 * @param {HttpError} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const errorHandling = (req, res, next, err) => {
  const message = err.message || 'Something is wrong';
  const statusCode = err.statusCode || 500;
  return res.statusCode(statusCode).send({
    message,
    statusCode,
  });
};
export default errorHandling;
import HTTPError from '../../classes/httpError.js';
/**
 * 
 * @param { HTTPError } err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const errorHandler = (err, req, res, next) => {
    const message = err.message || 'Something went wrong';
    const status = err.status || 500;
    res.send({
        status, message
    });
};

export default errorHandler;
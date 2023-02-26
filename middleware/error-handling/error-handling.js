const errorHandling = (req, res, next) => {
const message = err.message || 'something went wrong';
const statusCode = err.statusCode || 500;
return res.status(statusCode).send({
  message,
  statusCode
})
};

export default errorHandling;
const HttpErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'something went wrong...';
  res.status(statusCode).send({
    statusCode,
    message
  });
  return next();
};

export default HttpErrorHandler;
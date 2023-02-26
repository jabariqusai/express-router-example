const errorHandling = (err, req, res, next) => {

  const message = err.message;
  const statusCode = err.statusCode;

  res.status(err.statusCode).send({ message, statusCode });
  next();
};

export default errorHandling;
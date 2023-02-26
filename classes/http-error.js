class HttpError extends Error {
  message;
  statusCode;
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
};

export default HttpError;
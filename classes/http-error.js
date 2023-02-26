class HttpError extends Error {
  message;
  statusCode;

  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode || 500;
    this.message = message || 'Something went wrong';
  }
}

export default HttpError;
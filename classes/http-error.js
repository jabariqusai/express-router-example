class HttpError extends Error {
  message;
  statusCode;

  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

export default HttpError;
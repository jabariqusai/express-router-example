class HTTPError extends Error {
  message;
  status;
  constructor(message, status) {
    super(message);
    this.status = status;
    this.message = message;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default HTTPError;
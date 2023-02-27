class HttpError extends Error {
  statusCode ;
  message ;
  constructor(statusCode , message) {
    super()
    this.statusCode = statusCode ;
    this.message = message;
  }
}
export default HttpError
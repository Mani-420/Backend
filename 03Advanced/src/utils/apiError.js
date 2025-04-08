class ApiError extends Error {
  constructor(
    message = 'Something went wrong',
    statusCode,
    errors = [],
    stack = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
    this.data = null;
    this.errors = errors;
    // this.stack = stack;
    // this.isOperational = true;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }

    // Error.captureStackTrace(this, this.constructor);
  }
}

export { ApiError };

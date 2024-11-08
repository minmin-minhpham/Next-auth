const {
  httpStatusCode: { ReasonPhrases, StatusCodes }
} = require('./index');

class ApplicationError extends Error {
  constructor(statusCode, message, ...args) {
    super(...args);

    this.statusCode = statusCode;
    this.message = message;
  }
}

class BadRequestError extends ApplicationError {
  constructor(message = ReasonPhrases.BAD_REQUEST, ...args) {
    super(StatusCodes.BAD_REQUEST, message, ...args);
  }
}

class UnauthorizedError extends ApplicationError {
  constructor(message = ReasonPhrases.UNAUTHORIZED, ...args) {
    super(StatusCodes.UNAUTHORIZED, message, ...args);
  }
}

class ForbiddenError extends ApplicationError {
  constructor(message = ReasonPhrases.FORBIDDEN, ...args) {
    super(StatusCodes.FORBIDDEN, message, ...args);
  }
}

class NotFoundError extends ApplicationError {
  constructor(message = ReasonPhrases.NOT_FOUND, ...args) {
    super(StatusCodes.NOT_FOUND, message, ...args);
  }
}

class InternalError extends ApplicationError {
  constructor(message = ReasonPhrases.INTERNAL_SERVER_ERROR, ...args) {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message, ...args);
  }
}

class HTTPNotSupportedError extends ApplicationError {
  constructor(message = ReasonPhrases.HTTP_VERSION_NOT_SUPPORTED, ...args) {
    super(StatusCodes.HTTP_VERSION_NOT_SUPPORTED, message, ...args);
  }
}

class UnprocessableEntity extends ApplicationError {
  constructor(message = ReasonPhrases.UNPROCESSABLE_ENTITY, ...args) {
    super(StatusCodes.UNPROCESSABLE_ENTITY, message, ...args);
  }
}

module.exports = {
  ApplicationError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  InternalError,
  HTTPNotSupportedError,
  UnprocessableEntity
};

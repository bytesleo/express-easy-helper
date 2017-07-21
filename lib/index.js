'use strict';

var status = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNSUPPORTED_ACTION: 405,
  VALIDATION_FAILED: 422,
  SERVER_ERROR: 500
}

var api = {

  // Is simple response
  simple(res, statusCode, data) {

    if (data || statusCode && typeof statusCode != 'number') {
      return true;
    } else {
      return false;
    }

  },

  // RESULT
  result(res, statusCode, data) {

    if (this.simple(res, statusCode, data))
      return res.status(data
        ? statusCode
        : status.OK).json(data || statusCode);

    return (entity) => {
      if (entity)
        return res.status(statusCode || status.OK).json(entity);
      return null;
    };
  },

  // ERROR
  error(res, statusCode, data) {

    if (this.simple(res, statusCode, data))
      return res.status(data
        ? statusCode
        : status.SERVER_ERROR).json(data || statusCode || {
        message: 'Internal Server Error'
      });

    return (err) => {
      if (err)
        return res.status(statusCode || status.SERVER_ERROR).json({message: err});
      return null;
    };
  },

  // NOTFOUND
  notFound(res, statusCode, data) {

    if (this.simple(res, statusCode, data))
      return res.status(data
        ? statusCode
        : status.NOT_FOUND).json(data || statusCode || {
        message: 'Not Found'
      });

    return (entity) => {
      if (!entity) {
        res.status(statusCode || status.NOT_FOUND).end();
        return null;
      }
      return entity
    };
  },

  // UNAUTHORIZED
  unauthorized(res, statusCode, data) {

    return res.status(data
      ? statusCode
      : status.UNAUTHORIZED).json(data || statusCode || {
      message: 'Unauthorized'
    });
  },

  // FORBIDDEN
  forbidden(res, statusCode, data) {

    return res.status(data
      ? statusCode
      : status.FORBIDDEN).json(data || statusCode || {
      message: 'Forbidden'
    });
  },

  // BADREQUEST
  badRequest(res, statusCode, data) {

    return res.status(data
      ? statusCode
      : status.BAD_REQUEST).json(data || statusCode || {
      message: 'Bad Request'
    });
  },

  // UNSUPPORTEDACTION
  unsupportedAction(res, statusCode, data) {

    return res.status(data
      ? statusCode
      : status.UNSUPPORTED_ACTION).json(data || statusCode || {
      message: 'Unsupported Action'
    });
  },

  // INVALID
  invalid(res, statusCode, data) {
    return res.status(data
      ? statusCode
      : status.VALIDATION_FAILED).json(data || statusCode || {
      message: 'Validation Failed'
    });
  }
}

module.exports = api;

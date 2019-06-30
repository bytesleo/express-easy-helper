const STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNSUPPORTED_ACTION: 405,
  VALIDATION_FAILED: 422,
  SERVER_ERROR: 500
};

/**
 * success
 *
 * @param {*} res
 * @param {*} statusCode
 * @param {*} data
 * @returns
 */
const success = (res, statusCode, data) => {
  return res
    .status(data ? statusCode : STATUS.OK)
    .json(data || statusCode || "success");
};

/**
 * error
 *
 * @param {*} res
 * @param {*} statusCode
 * @param {*} data
 * @returns
 */
const error = (res, statusCode, data) => {
  return res
    .status(data ? statusCode : STATUS.SERVER_ERROR)
    .json(data || statusCode || "error");
};

/**
 * notFound
 *
 * @param {*} res
 * @param {*} statusCode
 * @param {*} data
 * @returns
 */
const notFound = (res, statusCode, data) => {
  return res
    .status(data ? statusCode : STATUS.NOT_FOUND)
    .json(data || statusCode || "not found");
};

/**
 * unauthorized
 *
 * @param {*} res
 * @param {*} statusCode
 * @param {*} data
 * @returns
 */
const unauthorized = (res, statusCode, data) => {
  return res
    .status(data ? statusCode : STATUS.UNAUTHORIZED)
    .json(data || statusCode || "unauthorized");
};

/**
 * forbidden
 *
 * @param {*} res
 * @param {*} statusCode
 * @param {*} data
 * @returns
 */
const forbidden = (res, statusCode, data) => {
  return res
    .status(data ? statusCode : STATUS.FORBIDDEN)
    .json(data || statusCode || "forbidden");
};

/**
 * badRequest
 *
 * @param {*} res
 * @param {*} statusCode
 * @param {*} data
 * @returns
 */
const badRequest = (res, statusCode, data) => {
  return res
    .status(data ? statusCode : STATUS.BAD_REQUEST)
    .json(data || statusCode || "bad request");
};

/**
 * unsupportedAction
 *
 * @param {*} res
 * @param {*} statusCode
 * @param {*} data
 * @returns
 */
const unsupportedAction = (res, statusCode, data) => {
  return res
    .status(data ? statusCode : STATUS.UNSUPPORTED_ACTION)
    .json(data || statusCode || "unsupported");
};

/**
 * invalid
 *
 * @param {*} res
 * @param {*} statusCode
 * @param {*} data
 * @returns
 */
const invalid = (res, statusCode, data) => {
  return res
    .status(data ? statusCode : STATUS.VALIDATION_FAILED)
    .json(data || statusCode || "invalid");
};

export {
  success,
  error,
  notFound,
  unauthorized,
  forbidden,
  badRequest,
  unsupportedAction,
  invalid
};

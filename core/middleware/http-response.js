const { HTTP_ERROR } = require('../constants/http-error'),
{ Conflict, InternalServerError, NotAcceptable, NotFound, Ok } = HTTP_ERROR;

/**
 * Standarizes a Response with a HTTP Error
 * 
 * @param res Response
 * @param status HTTP Error status
 * @param code HTTP Error code (statusText)
 * @param message Friendly message
 * @param data Data to send
 * @returns void
 */
httpResponse = (res, status, code, message, data) => {
  const response = { status, code, message, data };

  res.writeHead(status, {
    'Content-Length': Buffer.byteLength(JSON.stringify(response)),
    'Content-Type': 'application/json',
  }).end(JSON.stringify(response));
}

httpResponseConflict = (res, message, data) =>
  httpResponse(res, Conflict.status, Conflict.code, message, data);

httpResponseInternalServerError = (res, message, data) =>
  httpResponse(res, InternalServerError.status, InternalServerError.code, message, data);

httpResponseNotAceptable = (res, message, data) =>
  httpResponse(res, NotAcceptable.status, NotAcceptable.code, message, data);

httpResponseNotFound = (res, message, data) =>
  httpResponse(res, NotFound.status, NotFound.code, message, data);

httpResponseOk = (res, message, data) =>
  httpResponse(res, Ok.status, Ok.code, message, data);

module.exports =  { 
  httpResponse,
  httpResponseConflict,
  httpResponseInternalServerError,
  httpResponseNotAceptable,
  httpResponseNotFound,
  httpResponseOk
};

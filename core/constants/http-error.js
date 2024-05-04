const HTTP_ERROR = {
  // Information responses
  Continue: { status: 100, code: 'Continue' },
  SwitchingProtocols: { status: 101, code: 'Switching Protocols' },
  Processing: { status: 102, code: 'Processing' },
  EarlyHints: { status: 103, code: 'Early Hints' },

  // Successful responses
  Ok: { status: 200, code: 'OK' },
  Created: { status: 201, code: 'Created' },
  Acepted: { status: 202, code: 'Accepted' },
  NonAuthoritativeInformation: { status: 203, code: 'Non-Authoritative Information' },
  NoContent: { status: 204, code: 'No Content' },
  ResetContent: { status: 205, code: 'Reset Content' },
  PartialContent: { status: 206, code: 'Partial Content' },
  MultiStatus: { status: 207, code: 'Multi-Status' },
  AlreadyReported: { status: 208, code: 'Already Reported' },
  IMUsed: { status: 226, code: 'IMUsed' },

  // Redirection messages
  MultipleChoices: { status: 300, code: 'Multiple Choices' },
  MovedPermanently: { status: 301, code: 'Moved Permanently' },
  Found: { status: 302, code: 'Found' },
  SeeOther: { status: 303, code: 'See Other' },
  NotModified: { status: 304, code: 'Not Modified' },
  UseProxy: { status: 305, code: 'Use Proxy' }, // Deprecated
  Unused: { status: 306, code: 'Unused' }, // Don't user already
  TemporaryRedirect: { status: 307, code: 'Temporary Redirect' },
  PermanentRedirect: { status: 308, code: 'Permanent Redirect' },

  // Client error responses
  BadRequest: { status: 400, code: 'Bad Request' },
  Unauthorized: { status: 401, code: 'Unauthorized' },
  PaymentRequired: { status: 402, code: 'Payment Required' },
  Forbidden: { status: 403, code: 'Forbidden' },
  NotFound: { status: 404, code: 'Not Found' },
  MethodNotAllowed: { status: 405, code: 'Method Not Allowed' },
  NotAcceptable: { status: 406, code: 'Not Acceptable' },
  ProxyAuthenticationRequired: { status: 407, code: 'Proxy Authentication Required' },
  RequestTimeout: { status: 408, code: 'Request Timeout' },
  Conflict: { status: 409, code: 'Conflict' },
  Gone: { status: 410, code: 'Gone' },
  LengthRequired: { status: 411, code: 'Length Required' },
  PreconditionFailed: { status: 412, code: 'Precondition Failed' },
  PayloadTooLarge: { status: 413, code: 'Payload Too Large' },
  URITooLong: { status: 414, code: 'URI Too Long' },
  UnsupportedMediaType: { status: 415, code: 'Unsupported Media Type' },
  RangeNotSatisfiable: { status: 416, code: 'Range Not Satisfiable' },
  ExpectationFailed: { status: 417, code: 'Expectation Failed' },
  ImATeapot: { status: 418, code: `I'm a teapot` },
  MisdirectedRequest: { status: 421, code: 'Misdirected Request' },
  UnprocessableEntity: { status: 422, code: 'Unprocessable Entity' },
  Locked: { status: 423, code: 'Locked' },
  FailedDependency: { status: 424, code: 'Failed Dependency' },
  TooEarly: { status: 425, code: 'Too Early' },
  UpgradeRequired: { status: 426, code: 'Upgrade Required' },
  PreconditionRequired: { status: 428, code: 'Precondition Required' },
  TooManyRequests: { status: 429, code: 'Too Many Requests' },
  RequestHeaderFieldsTooLarge: { status: 431, code: 'Request Header Fields Too Large' },
  UnavailableForLegalReasons: { status: 451, code: 'Unavailable For Legal Reasons' },

  // Server error responses
  InternalServerError: { status: 500, code: 'Internal Server Error' },
  NotImplemented: { status: 501, code: 'Not Implemented' },
  BadGateway: { status: 502, code: 'Bad Gateway' },
  ServiceUnavailable: { status: 503, code: 'Service Unavailable' },
  GatewayTimeout: { status: 504, code: 'Gateway Timeout' },
  HTTPVersionNotSupported: { status: 505, code: 'HTTP Version Not Supported' },
  VariantAlsoNegotiates: { status: 506, code: 'Variant Also Negotiates' },
  InsufficientStorage: { status: 507, code: 'Insufficient Storage' },
  LoopDetected: { status: 508, code: 'Loop Detected' },
  BandwidthLimitExceeded: { status: 509, code: 'Bandwidth Limit Exceeded' },
  NotExtended: { status: 510, code: 'Not Extended' },
  NetworkAuthenticationRequired: { status: 511, code: 'Network Authentication Required' }
};

module.exports = {
  HTTP_ERROR
};

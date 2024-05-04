const express = require('express'),
  router = express.Router(),
  { httpResponseConflict,
    httpResponseNotAceptable,
    httpResponseOk
  } = require('../core/middleware/http-response');
  
/* GET home page. */
router.get('/', (req, res, next) => {
  httpResponseOk(res, '', {});
});

module.exports = router;

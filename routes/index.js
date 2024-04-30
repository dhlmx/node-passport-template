const express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = { message: '', data: {} };

  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(data),
    'Content-Type': 'application/json',
  })
  .end(data);
});

module.exports = router;

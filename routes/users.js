const express = require('express'),
  router = express.Router(),
  User = require('../data/models/user');

router.delete('/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id).then(user => {
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(JSON.stringify(user)),
      'Content-Type': 'application/json',
    }).end(JSON.stringify(user));
  }).catch(err => {
    console.error(`ERROR: DELETE /users/:id`, req.params.id, err);
    return next(err);
  });
});

router.get('/', (req, res, next) => {
  User.find().then(users => {
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(JSON.stringify(users)),
      'Content-Type': 'application/json',
    }).end(JSON.stringify(users));
  }).catch(err => {
    console.error(`ERROR: GET /users/`, err);
    return next(err);
  });
});

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id).then(user => {
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(JSON.stringify(user)),
      'Content-Type': 'application/json',
    }).end(JSON.stringify(user));
  }).catch(err => {
    console.error(`ERROR: GET /users/:id`, req.body, err);
    return next(err);
  });
});

router.post('/', (req, res, next) => {
  User.create({ ...req.body }).then(user => {
    res.writeHead(201, {
      'Content-Length': Buffer.byteLength(JSON.stringify(user)),
      'Content-Type': 'application/json',
    }).end(JSON.stringify(user));
  }).catch(err => {
    console.error(`ERROR: POST /users/`, req.body, err);
    return next(err);
  });
});

router.put('/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { ...req.body }).then(user => {
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(JSON.stringify(user)),
      'Content-Type': 'application/json',
    }).end(JSON.stringify(user));
  }).catch(err => {
    console.error(`ERROR: PUT users/:id`, req.params, req.body, err);
    return next(err);
  });
});

module.exports = router;

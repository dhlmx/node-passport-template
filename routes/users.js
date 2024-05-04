const express = require('express'),
  router = express.Router(),
  User = require('../data/models/user'),
  { httpResponseConflict,
    httpResponseNotAceptable,
    httpResponseOk
  } = require('../core/middleware/http-response');

router.get('', (req, res, next) => {
  User.find().sort({ name: 1}).then(users => {
    httpResponseOk(res, '', users);
  }).catch(err => {
    next(err);
  });
});

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id).then(user => {
    httpResponseOk(res, '', user);
  }).catch(err => {
    next(err);
  });
});

router.post('', (req, res, next) => {
  User.create({ ...req.body }).then(user => {
    httpResponseOk(res, '', user);
  }).catch(err => {
    if (err.code === 11000) {
      httpResponseConflict(res, 'Index or constraint conflict', err);
    } else if (err.name === 'ValidationError') {
      const errorMessages = Object.keys(err.errors).map(fieldError => err.errors[fieldError].message);
      httpResponseNotAceptable(res, 'Validation error', errorMessages);
    } else {
      next(err);
    }
  });
});

router.delete('/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id).then(user => {
    httpResponseOk(res, '', user);
  }).catch(err => {
    next(err);
  });
});

router.put('/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { ...req.body }).then(user => {
    httpResponseOk(res, '', user);
  }).catch(err => {
    next(err);
  });
});

module.exports = router;

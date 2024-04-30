const User = require('../../data/models/user'),

readUser = (req, res, next) => {
  User.findOne({ userName: req.params.userName }, (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.send('Not found', 404);
    }

    req.user = user;
    next();
  });
};

module.exports = readUser;

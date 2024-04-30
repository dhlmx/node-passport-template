const User = require('../../data/models/user'),

createUser = (req, res, next) => {
  User.create(new User({ ...req.body }), (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.send('Not created', 404);
    }

    req.user = user;
    next();
  });
};

module.exports = createUser;

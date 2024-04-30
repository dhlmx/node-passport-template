require('dotenv').config();

const express = require('express'),
  expressSession = require('express-session'),
  { query, validationResult } = require('express-validator'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  createError = require('http-errors'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  multer = require('multer'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  path = require('path'),

  // App
  db = mongoose.connect('mongodb://127.0.0.1/nodeauth'),
  app = express(),
  // upload = multer({ dest: './uploads' }),

  // Routing
  indexRouter = require('./routes/index'),
  authRouter = require('./routes/auth'),
  usersRouter = require('./routes/users');

  db.then(() => {
    console.info('MongoDB connected successfully');
  }).catch(onRejected => {
    console.error('MongoDB ERROR:', onRejected);
  });
  
// Middleware
app.use(logger('dev'));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: false }));

// Session
app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: true 
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Validator
/*
app.use(validationResult({
  errorFormatter: function(param, msg, value) {
      const namespace = param.split('.'),
          root = namespace.shift();
      let formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// app.use(query(req, res), {
//   if (validationResult(req).isEmpty()) {
//     return res.send(`Hello, ${req.query.person}!`);
//   }

//   res.send({ errors: result.array() });
// });

*/

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', function(req, res, next) {
//   res.locals.user = req.user || null;
// });

// Routing
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(createError(404, 'The API resource does not exist.'));
});

// Error Handler
app.use(function(err, req, res, next) {
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  if (res.locals.error) {
    res.status(res.locals.error.status);
  } else {
    res.status(500);
  }

  res.end(JSON.stringify(res.locals.error));
});

module.exports = app;

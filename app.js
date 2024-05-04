require('dotenv').config();
require('colors');

const express = require('express'),
  expressSession = require('express-session'),
  // { query, validationResult } = require('express-validator'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  cors = require('cors'),
  helmet = require('helmet'),
  hpp = require('hpp'),
  { httpResponse, httpResponseNotFound } = require('./core/middleware/http-response'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  multer = require('multer'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  path = require('path'),
  { HTTP_ERROR } = require('./core/constants/http-error'),
  { InternalServerError, NotFound } = HTTP_ERROR,

  // App
  db = mongoose.connect(`${process.env.DB_CONNECTION}`),
  app = express(),
  // upload = multer({ dest: './uploads' }),

  // Routing
  indexRouter = require('./routes/index'),
  authRouter = require('./routes/auth'),
  usersRouter = require('./routes/users');

  // whiteList = [
  //   'http://127.0.0.1:4200',
  //   'https://127.0.0.1:4200',
  //   'http://localhost:4200',
  //   'https://localhost:4200'
  // ],
  // corsOptions = {
  //   origin: function (origin, callback) {
  //     if (whiteList.indexOf(origin) !== -1) {
  //       callback(null, true)
  //     } else {
  //       callback(new Error('Not allowed by CORS'))
  //     }
  //   }
  // };

db.then(() => {
  console.info('MongoDB connected successfully'.magenta.bold);
}).catch(onRejected => {
  console.error('MongoDB ERROR:'.red.bold, onRejected);
});

// Middleware
app.use(logger('dev'));
app.use(helmet()); // Secures Server by setting HTTP response headers
app.use(hpp()); // Protects against HTTP Parameter Pollution attacks
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
  httpResponseNotFound(res, 'The API resource does not exist', req.url);
  return;
});

// Error Handler
app.use(function(err, req, res, next) {
  console.info('Environment:'.green, req.app.get('env'), process.env.NODE_ENV.magenta);

  res.locals.error = req.app.get('env') === 'development' ? err : {};
  httpResponse(
    res,
    err.status ? err.status : InternalServerError.status,
    err.statusText ? err.statusText : InternalServerError.code,
    err.message ? err.message : 'Unknown error detected',
    req.app.get('env') === 'development' ? err : {}
  );
});

module.exports = app;

const express = require('express'),
  router = express.Router(),
  multer = require('multer'),
  upload = multer({ dest: '../routes' });
//  { User, createUser } = require('../models/user');


// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Login' });
// });

// router.get('/logout', function(req, res, next) {
//   res.render('logout', { title: 'Logout' });
// });

// router.get('/register', function(req, res, next) {
//   res.render('register', { title: 'Register' });
// });

// router.post('/login', function(req, res, next) {
// });

// router.post('/register', upload.single('profileimage'), function(req, res, next) {
//   const name = req.body.name,
//       email = req.body.email,
//       username = req.body.username,
//       password = req.body.password,
//       password2 = req.body.password2;
//   let profileimage = null;

//   if (req.file) {
//     console.log('Uploading file...');
//     profileimage = req.file.filename;
//   } else {
//     console.log('No File Uploaded...');
//     profileimage = 'noimage.jpg';
//   }

//   req.checkBody('name', 'Name field is required').notEmpty();
//   req.checkBody('email', 'Email field is required').notEmpty();
//   req.checkBody('email', 'Email is valid').notEmail();
//   req.checkBody('username', 'Username field is required').notEmpty();
//   req.checkBody('password', 'Passwordfield is required').notEmpty();
//   req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

//   let errors = req.validationErrors();

//   console.info(errors);

//   if (errors) {
//     res.render('register', {
//       errors: errors
//     });
//   } else {
//     const newUser = new User({
//       name: name,
//       email: email,
//       username: username,
//       password: password,
//       profileimage: profileimage
//     });

//     User.createUser(newUser, (err, user) => {
//       if (err) {
//         console.info('createUser', err)
//         throw err;
//       }

//       console.info(user);

//       res.location('/');
//       res.redirect('/');
//     });
//   }
// });

module.exports = router;

const mongoose = require('mongoose'),
  { emailRegexp } = require('../../core/constants/regexp'),
  db = require('../db/db').users,
  { matchValidator, maxLengthValidator, minLengthValidator, requiredValidator } = require('../../core/validators/validators');

module.exports = UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    minLength: minLengthValidator('userName', db.userName.minLength),
    maxLength: maxLengthValidator('userName', db.userName.maxLength),
    required: requiredValidator('userName')
  },
  name: {
    type: String,
    minLength: minLengthValidator('name', db.name.minLength),
    maxLength: maxLengthValidator('name', db.name.maxLength), 
    required: requiredValidator('name')
  },
  email: {
    type: String,
    validate: matchValidator('email', emailRegexp),
    required: requiredValidator('email')
  },
  password: {
    type: String,
    required: requiredValidator('password')
  },
  profileImage: {
    type: String
  }
});

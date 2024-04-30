const mongoose = require('mongoose'),
  UserSchema = new mongoose.Schema({
    userName: {
      type: String,
      index: true
    },
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    profileImage: {
      type: String
    }
  });

module.exports = UserSchema;

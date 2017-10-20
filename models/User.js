'use strict';

import mongoose from 'mongoose';
var Schema = mongoose.Schema;

// Define collection and schema for User
var User = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  profile: {
    type: String
  }
  }, {
    collection: 'users'
  });

  module.exports = mongoose.model('User', User);

'use strict';

import mongoose from 'mongoose';
var Schema = mongoose.Schema;

// Define collection and schema for Profile
var Profile = new Schema({
  name: {
    type: String
  }
  }, {
    collection: 'profiles'
  });

  module.exports = mongoose.model('Profile', Profile);

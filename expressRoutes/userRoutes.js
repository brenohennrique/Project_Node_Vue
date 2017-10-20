'use strict';

var express= require('express');
var app = express();
var userRoutes = express.Router();

// Require Profile Model in our routes module
var User = require('../models/User');

// Defined store route
userRoutes.route('/add').post( (req, res) => {
  var user = new User(req.body);
    user.save()
  .then(user => {
    res.status(200).json({'user': 'Usuario adicionado com sucesso!'});
  })
  .catch(err => {
    res.status(400).send("Unable to save to database");
  })
});

// Defined get data(index or listing) routes
userRoutes.route('/').get( (req, res) => {
  User.find( (err, users) => {
    if(err){
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

// Defined edit route
userRoutes.route('/edit/:id').get( (req, res) => {
  var id = req.params.id;
  User.findById(id, function(err, user) {
    res.json(user);
  });
});

// Defined update routes
userRoutes.route('/update/:id').post( (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      user.name = req.body.name;
      user.age = req.body.age;
      user.profile = req.body.profile;

      user.save().then(user => {
        res.json('update complete');
      })
      .catch(err => {
        res.status(400).send("Unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destoy route
userRoutes.route('/delete/:id').get( (req, res) => {
  User.findByIdAndRemove({_id: req.params.id}, (err, user) => {
    if (err) res.json(err);
    else res.json('Removido com sucesso!');
  });
});

module.exports = userRoutes;

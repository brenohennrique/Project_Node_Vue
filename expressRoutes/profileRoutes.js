'use strict';

var express= require('express');
var app = express();
var profileRoutes = express.Router();

// Require Profile Model in our routes module
var Profile = require('../models/Profile');

// Defined store route
profileRoutes.route('/add').post( (req, res) => {
  var profile = new Profile(req.body);
    profile.save()
  .then(profile => {
    res.status(200).json({'profile': 'Perfil adicionado com sucesso!'});
  })
  .catch(err => {
    res.status(400).send("Unable to save to database");
  })
});

// Defined get data(index or listing) routes
profileRoutes.route('/').get( (req, res) => {
  Profile.find( (err, profiles) => {
    if(err){
      console.log(err);
    } else {
      res.json(profiles);
    }
  });
});

// Defined edit route
profileRoutes.route('/edit/:id').get( (req, res) => {
  var id = req.params.id;
  Profile.findById(id, function(err, profile) {
    res.json(profile);
  });
});

// Defined update routes
profileRoutes.route('/update/:id').post( (req, res) => {
  Profile.findById(req.params.id, (err, profile) => {
    if (!profile)
      return next(new Error('Could not load Document'));
    else {
      profile.name = req.body.name;

      profile.save().then(profile => {
        res.json('update complete');
      })
      .catch(err => {
        res.status(400).send("Unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destoy route
profileRoutes.route('/delete/:id').get( (req, res) => {
  Profile.findByIdAndRemove({_id: req.params.id}, (err, profile) => {
    if (err) res.json(err);
    else res.json('Removido com sucesso!');
  });
});

module.exports = profileRoutes;

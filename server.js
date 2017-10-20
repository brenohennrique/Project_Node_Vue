'use strict';

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    profileRoutes = require('./expressRoutes/profileRoutes'),
    userRoutes = require('./expressRoutes/userRoutes'),
    config = require('./config/DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the Database', err) }
);

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('/profiles', profileRoutes);
app.use('/users', userRoutes);

const port = process.env.PORT || 4000;

 app.listen(port, function() {
  console.log('Escutando na porta ' + port);
});

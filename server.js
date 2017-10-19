'use strict';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config/DB';

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

const port = process.env.PORT || 4000;

const server = app.listen( () => {
  console.log('Listening on port ' + port);
});

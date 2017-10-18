'use strict';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

var port = process.env.PORT || 4000;

var server = app.listen( () => {
  console.log('Listening on port ' + port);
});

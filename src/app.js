const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');

const routes = require('./routes');

const app = express();

app
  .use(helmet()) // security middlewares
  .use(cors()) // public API, allow all origins
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(compression()) // enable gzip compression
  .use('/api/v1', routes)
  .all('/*', (req, res) => res.status(200).send('Please read the API documentation'));

module.exports = app;

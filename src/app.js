const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const routes = require('./routes');

const app = express();

app
  .use(helmet()) // security middlewares
  .use(cors()) // public API, allow all origins
  .use(bodyParser.json()) // parse requests of content-type: application/json
  .use(bodyParser.urlencoded({ extended: true })) // parse requests of content-type: application/x-www-form-urlencoded
  .use(cookieParser()) // parse Cookie header and populate req.cookies
  .use(compression()) // enable gzip compression
  .enable('trust proxy') // express-rate-limit, needed if behind a reverse proxy (Heroku, AWS ELB etc)
  .use(rateLimit()) // enable default API limits (5 in 1 minute)
  .use('/api/v1', routes) // define routes with versioned prefix
  .all('/*', (req, res) => res.status(200).send('Please read the API documentation')); // catch all route

module.exports = app;

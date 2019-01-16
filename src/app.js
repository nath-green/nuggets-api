const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

const app = express();

app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cookieParser())
  .use('/api/v1', routes)
  .all('/*', (req, res) => res.status(200).send('Please read the API documentation'));

module.exports = app;

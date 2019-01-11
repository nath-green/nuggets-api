const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', routes);

app.all('/*', (req, res) =>
  res.status(200).send({ app: config.app, message: 'Please read the API documentation' })
);

module.exports = app;

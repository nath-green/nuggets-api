const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const auth = require('./middlewares/auth');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', auth.isAuthenticated, routes);

app.all('/*', (req, res) => res.status(200).send('Please read the API documentation'));

module.exports = app;

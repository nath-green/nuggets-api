const Roster = require('../models/roster.model');

exports.list = (req, res, next) => res.status(200).send({ message: 'Return an array of data' });

exports.getById = (req, res, next) =>
  res.status(200).send({ id: req.params.id, message: 'Return data for one ID' });

const Roster = require('../models/roster.model');

exports.list = async (req, res, next) => {
  let data = [];
  try {
    data = await Roster.find({});
  } catch (err) {
    res.status(400).send({ message: 'unsuccessful', data });
  }
  res.status(200).send({ data });
};

exports.add = (req, res, next) => {
  Roster.create(
    {
      name: req.body.name,
      jersey: req.body.jersey
    },
    err => {
      if (err) res.status(400).send({ successful: false });
      res.status(200).send({ successful: true, data: req.body });
    }
  );
};

exports.getById = (req, res, next) =>
  res.status(200).send({ id: req.params.id, message: 'Return data for one ID' });

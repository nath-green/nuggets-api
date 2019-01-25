const Roster = require('../models/roster.model');

exports.list = (req, res, next) => {
  Roster.find({}, (err, data) => {
    if (err) return res.status(400).send({ success: false, message: 'Cannot return roster.' });
    return res.status(200).send({ data, success: true, message: 'Roster returned' });
  }).select('-__v');
};

exports.add = (req, res, next) => {
  Roster.create(req.body, (err, player) => {
    if (err)
      return res.status(400).send({ success: false, message: 'Player cannot be added to roster' });
    return res.status(200).send({ data: player, success: true, message: 'Player added to roster' });
  });
};

exports.getById = (req, res, next) => {
  Roster.findById(req.params.id, (err, player) => {
    if (err) return res.status(400).send({ success: false, message: 'That ID does not exist.' });
    return res.status(200).send({ data: player, success: true, message: 'Player returned' });
  }).select('-__v');
};

exports.updateById = (req, res, next) => {
  Roster.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, player) => {
    if (err || player === null)
      return res.status(400).send({ success: false, message: 'That ID does not exist.' });
    return res.status(200).send({ sucess: true, message: 'Player updated', data: player });
  });
};

exports.deleteById = (req, res, next) => {
  Roster.findByIdAndRemove(req.params.id, (err, player) => {
    if (err || player === null)
      return res.status(400).send({ success: false, message: 'That ID does not exist.' });
    return res
      .status(200)
      .send({ data: player, sucess: true, message: 'Player deleted from roster' });
  });
};

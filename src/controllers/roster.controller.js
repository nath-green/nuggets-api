const Roster = require('../models/roster.model');

exports.list = async (req, res, next) => {
  let data = [];
  try {
    data = await Roster.find({}).select('-__v');
  } catch (err) {
    return res.status(400).send({ data });
  }
  return res.status(200).send({ data });
};

exports.add = (req, res, next) => {
  Roster.create(
    {
      name: req.body.name,
      jersey: req.body.jersey
    },
    (err, player) => {
      if (err) return res.status(400).send({ success: false });
      return res.status(200).send({ data: player });
    }
  );
};

exports.getById = (req, res, next) => {
  Roster.findById(req.params.id, (err, player) => {
    if (err) return res.status(400).send({ success: false, message: 'That ID does not exist.' });
    return res.status(200).send({ data: player });
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
      .send({ sucess: true, message: 'Player deleted from roster', data: player });
  });
};

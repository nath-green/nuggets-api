const mongoose = require('mongoose');

const RosterSchema = new mongoose.Schema({
  name: String,
  jersey: Number
});

module.exports = mongoose.model('Roster', RosterSchema, 'roster');

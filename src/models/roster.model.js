const mongoose = require('mongoose');

const RosterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  jersey: { type: Number, required: true },
  position: { type: String, required: true },
  country: { type: String, required: true },
  yearsPro: { type: Number, required: true },
  stats: {
    ppg: { type: Number, required: true },
    rpg: { type: Number, required: true },
    apg: { type: Number, required: true }
  }
});

module.exports = mongoose.model('Roster', RosterSchema, 'roster');

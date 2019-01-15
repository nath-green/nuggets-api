const router = require('express').Router();
const Roster = require('../controllers/roster.controller');

// router.route('/').get(Roster.list);
router.route('/').get((req, res) => {
  res.send({ auth: true, message: 'this is the roster list' });
});
router.route('/:id').get(Roster.getById);

module.exports = router;

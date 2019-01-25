const router = require('express').Router();
const auth = require('../middlewares/auth');
const Roster = require('../controllers/roster.controller');

router.route('/').get(Roster.list);
router.route('/:id').get(Roster.getById);
router.route('/').post(auth.hasRole(2), Roster.add);
router.route('/:id').patch(auth.hasRole(2), Roster.updateById);
router.route('/:id').delete(auth.hasRole(2), Roster.deleteById);

module.exports = router;

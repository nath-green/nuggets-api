const router = require('express').Router();
const auth = require('../middlewares/auth');
const sessionRoutes = require('./session.routes');
const rosterRoutes = require('./roster.routes');

router.use('/', sessionRoutes);
router.use('/roster', auth.hasRole(2), rosterRoutes);

module.exports = router;

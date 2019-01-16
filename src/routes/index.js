const router = require('express').Router();
const sessionRoutes = require('./session.routes');
const rosterRoutes = require('./roster.routes');

router.use('/', sessionRoutes);
router.use('/roster', rosterRoutes);

module.exports = router;

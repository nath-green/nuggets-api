const router = require('express').Router();
const exampleRoutes = require('./example.routes');

router.use('/example', exampleRoutes);

module.exports = router;

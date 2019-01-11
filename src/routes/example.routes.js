const router = require('express').Router();
const Example = require('../controllers/example.controller');

router.route('/').get(Example.list);
router.route('/:id').get(Example.getById);

module.exports = router;

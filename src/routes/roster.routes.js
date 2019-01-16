const router = require('express').Router();
const auth = require('../middlewares/auth');
const Roster = require('../controllers/roster.controller');

/*
 * @api [GET] /roster/{petId}
 * description: "Returns all pets from the system that the user has access to"
 * parameters:
 *   - (path) petId=2* {Integer} The pet ID
 *   - (query) limit {Integer:int32} The number of resources to return
 * responses:
 *   200:
 *     description: It works!
 */
router.route('/').get(Roster.list);
router.route('/').post(Roster.add);
router.route('/:id').get(Roster.getById);
router.route('/:id').patch(auth.hasRole(2), Roster.getById);
router.route('/:id').delete(auth.hasRole(2), Roster.getById);

// difference between PATCH and PUT: https://www.testingexcellence.com/difference-put-patch-requests/

module.exports = router;

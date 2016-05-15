var express = require('express');
var controller = require('./users.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/:id/smartgoals', controller.add_smartgoal);


module.exports = router;
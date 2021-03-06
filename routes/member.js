var express = require('express');
var router = express.Router();
var controller = require('../controllers').member;

router.get('/', controller.findAll);
router.post('/', controller.add);

module.exports = router;
var express = require('express');
var router = express.Router();
var controller = require('../controllers').payment;

router.post('/', controller.add);
router.get('/', controller.findAll)

module.exports = router;
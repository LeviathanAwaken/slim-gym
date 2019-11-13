var express = require('express');
var router = express.Router();
var controller = require('../controllers').employee;

router.get('/', controller.findAll);

module.exports = router;
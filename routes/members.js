var express = require('express');
var router = express.Router();
var controller = require('../controllers/member');

router.get('/', controller.findAll);

module.exports = router;
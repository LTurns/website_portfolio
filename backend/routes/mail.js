var express = require('express');
var router = express.Router();

var mailController = require('../controllers/mail');

router.post('/submit', mailController.Create);

module.exports = router;
var express = require('express');
var router = express.Router();
var charm = require('../controllers/charm-api');

/* GET home page. */
router.get('/', function(req, res) {
  charm(req, res);
});

module.exports = router;
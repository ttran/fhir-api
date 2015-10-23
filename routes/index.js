var express = require('express');
var router = express.Router();
var fhir = require('../controllers/fhir-api');
var charm = require('../controllers/charm-api');

/* GET home page. */
router.get('/', function(req, res, next) {
  // fhir(req, res, next);
  charm(req, res, next);
});

module.exports = router;
var express = require('express');
var router = express.Router();
var fhir = require('../controllers/fhir-api');

/* GET home page. */
router.get('/', function(req, res, next) {
  fhir.getInfo(req, res, next);
});

module.exports = router;
var rp = require('request-promise');
var fhir = require('./fhir-api.js');
var async = require('async');
var Q = require('q');

module.exports = function(req, res, next){
	var api = Q.all([
    fhir(0),
    fhir(50),
	fhir(100),
	fhir(150),
	fhir(200),
	fhir(250),
	fhir(300),
	fhir(350),
	fhir(400),
	fhir(450)
	]);
	
	api.then(function(data){
		var patients = [];
		for (var i=0;i<data.length;i++){
			for (var e=0;e<data[i].entry.length;e++){
				patients.push(data[i].entry[e]);
			}
		}
		res.json(patients);
	});
};
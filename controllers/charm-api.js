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

function call(offset){
	return 'http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base?_getpages=4d9c3635-373a-472b-8a9a-3cb14c90efec&_getpagesoffset='+offset+'&_count=50&_format=json&_pretty=true';
}
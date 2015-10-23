var rp = require('request-promise');
var fhir = require('./fhir-api.js');
var async = require('async');
var Q = require('q');

module.exports = function(req, res){
	var start = 123;
	var end = 456;
	var calls = [];
	
	for (var i=start;i<end;i+=50){
		if (i+50>end){
			var count = end-i;
			calls.push(fhir(i, count));
		} else {
			calls.push(fhir(i, 50));
		}
	}
	
	var api = Q.all(calls);
	
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
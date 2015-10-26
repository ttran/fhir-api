var fhir = require('fhir-node');

module.exports = function(req, res){

	var params = {
		start: 0,
		end: 250,
		format: 'json'
	};
	
	// for a promise
	fhir().then(function(records){
		res.json(records);
	});
	
	// for a callback
	fhir(params, function(records){
		res.json(records);
	});
};
var fhir = require('fhir-node');

module.exports = function(req, res){

	var params = {
		pages: 'a8b12fa1-fc96-40e6-9159-8a51b3185dc7',
		start: 41,
		end: 138,
		format: 'json'
	};
	
	// for a promise
	fhir(params).then(function(records){
		res.json(records);
	});
	
	// for a callback
	// fhir(params, function(records){
	// 	res.json(records);
	// });
};
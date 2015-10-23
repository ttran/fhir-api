var fhir = require('fhir-node');

module.exports = function(req, res){

	var params = {
		pages: '844d2445-ddb9-4af5-89f2-f22d744e9c7a',
		start: 0,
		end: 500,
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
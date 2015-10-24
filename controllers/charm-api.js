var fhir = require('fhir-node');

module.exports = function(req, res){

	var params = {
		pages: 'd33d98b9-91b8-49b0-b6f3-256e334f5437',
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
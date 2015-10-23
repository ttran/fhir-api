var rp = require('request-promise');
var Q = require('q');

module.exports = function(offset){
	var deferred = Q.defer();
	
	var url = 'http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base?_getpages=4d9c3635-373a-472b-8a9a-3cb14c90efec&_getpagesoffset='+offset+'&_count=50&_format=json&_pretty=true';
	rp(url).then(function(res){
		var json = JSON.parse(res);
		deferred.resolve(json);
	})
	.catch(function(err){
		console.log(err);
	});
	return deferred.promise;
};
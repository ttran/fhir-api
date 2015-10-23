var rp = require('request-promise');

exports.getInfo = function(req, res, next){

	var offset = 0;
	var url = 'http://polaris.i3l.gatech.edu:8080/gt-fhir-webapp/base?_getpages=4a0dddce-30f3-4c84-8437-466be9287250&_getpagesoffset='+offset+'&_count=50&_format=json&_pretty=true';
	rp(url).then(function(res1){
		
	var json1 = JSON.parse(res1);
		console.log(json1);
		res.json(json1);
	});
};
var q=require('q');
var AlertDef=require('./alertdef.model.js');
module.exports.AlertDef=AlertDef;

exports.getAllAlertDefinitions=function() {
	var defered=q.defer();
	AlertDef.find(function (err,alertdefs){
		if(err) {
			defered.reject(err);
		} else {
			defered.resolve(alertdefs);
		}
	});
	return defered.promise;
}
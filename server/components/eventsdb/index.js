'use strict';
var q=require('q');
var connectionpool=null;

exports.setConnectionPool=function(cp) {
	connectionpool=cp;
}

exports.getConnectionPool=function() {
	return connectionpool;
}

exports.insertEvent=function(date,module,usecase,value,dimension1,dimension2,dimension3,details) {
	var deffered=q.defer();
	var params={EVENT_DATE:date,MODULE:module,USECASE:usecase,VALUE:value,DIMENSION1:dimension1,DIMENSION2:dimension2,DIMENSION3:dimension3,DETAILS:details};

	connectionpool.query('INSERT INTO EVENTS SET ?',params,function(err,result){
		if(err) {
			deffered.reject(err);
		} else {
			deffered.resolve(result);
		}
	});
	return deffered.promise;
}
'use strict';
var q=require('q');
var connectionpool=null;

exports.setConnectionPool=function(cp) {
	connectionpool=cp;
}

exports.getConnectionPool=function() {
	return connectionpool;
}

exports.insertEvent=function(date,module,usecase,value,dimension1,dimension2,dimension3,details,duration) {
	var deffered=q.defer();
	var params={EVENT_DATE:date,MODULE:module,USECASE:usecase,VALUE:value,DIMENSION1:dimension1,DIMENSION2:dimension2,DIMENSION3:dimension3,DETAILS:details, DURATION:duration};

	connectionpool.query('INSERT INTO EVENTS SET ?',params,function(err,result){
		if(err) {
			deffered.reject(err);
            console.log(err);
		} else {
			deffered.resolve(result);
            console.log(result);

        }
	});
	return deffered.promise;
}

exports.getDistinctEvents=function() {
	var deffered=q.defer();
	connectionpool.query('SELECT distinct module,usecase,dimension1,dimension2,dimension3 FROM EVENTS',function(err,result){
		if(err) {
			deffered.reject(err);
		} else {
			deffered.resolve(result);
		}
	});
	return deffered.promise;
}
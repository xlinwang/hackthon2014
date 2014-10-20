'use strict';

var eventsdb=require('../eventsdb');
var CronJob = require('cron').CronJob;

module.exports.start=function() {

	//console.log("starting monitoring for alerts");
	// scheduler

	var job = new CronJob('0 */1 * * * *',
		checkDB,
		function(){console.log("completed")},
		true,
		"");
	job.start();

};

function checkDB(){
	var sqlQuery = 'select EVENT_DATE, MODULE, DIMENSION1, DURATION, COUNT(DIMENSION1) as count from coms_monitoring.EVENTS where EVENT_DATE >= DATE_SUB(NOW(),INTERVAL 0.5 HOUR) and DURATION > 60 group by MODULE, DIMENSION1 having count>2 ;'

	// check
	eventsdb.getConnectionPool().query(sqlQuery, function(err, rows, fields) {
  		if (err) throw err;
  		for( var i in rows) {
  			console.log(rows[i]);	
  		}
  		
	});
}

function alert(){

}


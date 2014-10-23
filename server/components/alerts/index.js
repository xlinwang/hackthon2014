'use strict';

var eventsdb=require('../eventsdb');
var CronJob = require('cron').CronJob;
var mailer = require('../mailer')

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
//	var sqlQuery = 'select EVENT_DATE, MODULE, DIMENSION1, DURATION, COUNT(DIMENSION1) as count from coms_monitoring.EVENTS where EVENT_DATE >= DATE_SUB(NOW(),INTERVAL 0.5 HOUR) and DURATION > 60 group by MODULE, DIMENSION1 having count>2 ;'
//
//	// check
//	eventsdb.getConnectionPool().query(sqlQuery, function(err, rows, fields) {
//  		if (err) throw err;
//  		prepareEmailNotification(rows[0].DURATION)
//  		for( var i in rows) {
//  			console.log(rows[i]);
//
//  		}
//
//	});
}

function prepareEmailNotification(duration){
	var frommail="no-reply@ebay.com";
    var toemail="thtammineni@ebay.com";
      var HtmlStr="<TABLE  width='20%'>" +
                    "<TR bgcolor='#0066CC'>" +
                        "<TD><font color='#FFFFFF'>Parameter</font></TD>" +
                        "<TD><font color='#FFFFFF'>Value</font></TD>" +
                    "</TR>" +
                    "<TR>" +
                        "<TD>DURATION</TD>" +
                        "<TD>"+duration+"</TD>" +
                     "</TR>"+
                   "</TABLE>"
    var mailOptions =
    {
        from:frommail,
        to:toemail,
        subject:"Alerting Email from coms_monitoring as of ",
        html: HtmlStr
    }
sendEmail(mailOptions);
}

function sendEmail (mailOptions)
{
    mailer.smtpTransport.sendMail(mailOptions, function(error, response){
        if(!error){
            console.log("Message sent")
            process.exit();  // comment this in production.
        }else{
            console.log("Error .. "+error)
        }
    });

}

function alert(){

}


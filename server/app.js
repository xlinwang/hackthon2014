/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var logger = require("./utils/logger");
var express = require('express');
var mongoose = require('mongoose');
var mysql = require('mysql');
var config = require('./config/environment');
var pig = require('./components/pig');
var pigParams = require('./components/pig/pigParams');
var cbs = require('./components/pig/processor');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

var mysqlconnectionpool=mysql.createPool({
	connectionLimit : config.mysql.connectionLimit,
	host:config.mysql.host,
	user:config.mysql.user,
	password:config.mysql.password,
	database:config.mysql.database
});
var schedule = require('node-schedule');
var eventsdb=require('./components/eventsdb');
eventsdb.setConnectionPool(mysqlconnectionpool);

var alerts=require('./components/alerts');
alerts.start();
// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Start Pig Scheduler
pig.start("testPig", cbs.cosmosCallBack, "0 */1 * * * *", pigParams.cosmosTestPig);
//pig.start("apiPig", cbs.apiCallBack, "0 */5 * * * *");

require('./components/alertdef')
var newAlertDef=new AlertDef({module:'anand'});
newAlertDef.save(function(err,alertdef){
	console.log(alertdef);
})
// Setup server
var app = express();
logger.debug("Overriding 'Express' logger");
app.use(require('morgan')({ "stream": logger.stream }));
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// exports public folder
// app.use(express.static(path.join(__dirname, 'public')));


// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
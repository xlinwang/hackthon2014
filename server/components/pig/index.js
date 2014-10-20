'use strict';
var scheduler = require('./pigScheduler');

function start(script, period, params, callback) {
    // TODO check all params
    log("pig start .....");

    // generate new params
    scheduler.runPeriod(script, params, callback);

    log("pig end ....");

};

function log(msg){
    console.log(msg);
}

module.exports.start = start;
module.exports.log = log;
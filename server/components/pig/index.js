'use strict';
var scheduler = require('./pigScheduler');
var utils = require('./utils');
var logger = require("../../utils/logger");

var defaultParams = {
    period:"0 */1 * * * *",
    data:{
        "inputParameters":
        {   "startDate":utils.genStartDate(),
            "endDate":utils.genEndDate(),
            "env":"null",
            "pool":"r1ordersvc",
            "machine":"null",
            "colo":"null",
            "sampling":"1"
        }

    }
}

function start(script, callback, period, params) {
//    //
//    params{
//        data:{
//            "env":"null",
//                "pool":"r1ordersvc",
//                "machine":"null",
//                "colo":"null",
//                "sampling":"1"
//        },
////        startDate: endDate - range;
//        endDate: now - 15min,
//        range:
//    }

    // TODO check all params
    log(JSON.stringify(defaultParams));

    if(!period){
        period = defaultParams.period;
    }
    if(params === undefined){
        params = {};
    }
    if(params.data === undefined){
        params.data = defaultParams.data;
    }

    // generate new params
    scheduler.runPeriod(script, period, params, callback);

};

function log(msg){
    logger.info(msg);
}

module.exports.start = start;
module.exports.log = log;
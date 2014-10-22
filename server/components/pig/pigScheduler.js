/**
 * Created by xwang17 on 10/16/14.
 */
var logger = require("../../utils/logger");
var CronJob = require('cron').CronJob;
var events = require('events');
var pig = require('./pigActionHelper');
var exec = require('child_process').exec;
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};


var utils = require('./utils')
var eventEmitter = new events.EventEmitter();

function log(msg){
    logger.info(msg)
}

function eventHandler(data, callback){
    if (callback && typeof(callback) === "function") {
        callback(data);
    } else {
        log(callback)
    }
}

function errorHandler(errorMsg, callback){
    var errors = [];
    errors.push(errorMsg);
    callback(null, errors);
}

function isRegisterSucceed(res){
    return true;
}

function isSubmitSucceed(res){
    return true;
}

function validFile(fileName){
    return true;
};

function generateLocation(fileName){

    var fileLocation = './server/public/pig/'+fileName+'.pig';
    return fileLocation;
}





eventEmitter.on('error', errorHandler);

var jobId;
function runScript(fileName, params, callback){
    if(validFile(fileName)){
        pig.unregister(fileName, function(res){
            log(res + " : " + fileName+".pig");
            pig.register(fileName, generateLocation(fileName), function(res){
                log("PIG -- "+"Registered file: " +res)
                if(isRegisterSucceed(res)){
                    params.data.inputParameters.startDate = utils.genStartDate();
                    params.data.inputParameters.endDate = utils.genEndDate();
                    log("PIG -- "+"Job submitting: " + JSON.stringify(params));
                    pig.submit(fileName+'.pig', params.data, function(jobIdRes){
                        log("PIG -- "+"job " + jobIdRes + " has been submitted");
                        if(isSubmitSucceed(jobIdRes)){
                            var timerId = setInterval(function () {
                                jobId = jobIdRes;
                                pig.status(jobIdRes, function(status){
                                    log("PIG -- "+"job "+jobId + " status: " + status);
                                    if(status === "SUBMITTED"){
                                        // continure
                                    }else if(status === "SUCCEEDED"){
                                        // clear and callback
                                        clearInterval(timerId);
                                        pig.retrieveOutput(res, function(data){
                                            if (callback && typeof(callback) === "function") {
                                                callback(data);
                                            } else {
                                                log(callback)
                                            }
                                        });
                                    }else{
                                        clearInterval(timerId);
                                        eventEmitter('error', 'job failed', callback);
                                    }
                                });
                            }, 10000);
                        }else{
                            eventEmitter('error', 'submit failed', callback);
                        }
                    });
                }else{
                    eventEmitter('error', "register failed", callback);
                }
            });
        })

    }else{
        eventEmitter('error', "invalid file", callback);
    }

}

function runPeriod(fileName, period, params, callback){
    log(JSON.stringify(params));
//    log(period);
    var job = new CronJob({cronTime : period,
        onTick : function(){
            log("run once ...");
            runScript(fileName, params, callback);
        },
        start:true,
        timeZone: "America/Los_Angeles"}
    );
}

module.exports.runPeriod = runPeriod;
module.exports.runOnce = runScript;


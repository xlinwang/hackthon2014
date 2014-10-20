/**
 * Created by xwang17 on 10/16/14.
 */

var CronJob = require('cron').CronJob;
var events = require('events');
var pig = require('./pigActionHelper');
var exec = require('child_process').exec;
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};



var eventEmitter = new events.EventEmitter();

function log(msg){
    console.log(msg);
}

function eventHandler(data, callback){
    callback(data);
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
    ////pig.register("./public/pigScripts/testPig.pig",cb);

    var fileLocation = './server/public/pig/'+fileName+'.pig';
    return fileLocation;
}

var data = {"inputParameters":
{   "startDate":"2014/10/10-12:00",
    "endDate":"2014/10/11-13:00",
    "env":"null",
    "pool":"r1ordersvc",
    "machine":"null",
    "colo":"null",
    "sampling":"1"}
};



eventEmitter.on('error', errorHandler);
eventEmitter.on('succeed', eventHandler);

var jobId;
function runScript(fileName, params, callback){
    if(validFile(fileName)){
        log("valid file");
        pig.register(generateLocation(fileName), function(res){
            log(res)
            if(isRegisterSucceed(res)){
                pig.submit(fileName+'.pig', data, function(res){
                    log(res);
                    if(isSubmitSucceed(res)){
                        var timerId = setInterval(function () {
                            jobId = res;
                            pig.status(res, function(status){
                                log(status);
                                if(status === "SUBMITTED"){
                                    log("processing ...");
                                }else if(status === "SUCCEED"){
                                    pig.retrieveOutput(res, function(data){
                                        log(data);
                                        eventEmitter("succeed", data, callback);
                                    });
                                    clearInterval(timerId);
                                }else{
                                    clearInterval(timerId);
                                    eventEmitter('error', 'job failed', callback);
                                }
                            });
                        }, 500000);
                    }else{
                        eventEmitter('error', 'submit failed', callback);
                    }
                });
            }else{
                eventEmitter('error', "register failed", callback);
            }
        });
    }else{
        eventEmitter('error', "invalid file", callback);
    }

}

function runPeriod(fileName, params, callback){
    var job = new CronJob('0 */30 * * * *',
        function(){
            log("run once ...");
            runScript(fileName, params, callback);
        },
        function () {
            console.log('complete');
        },
        true /* Start the job right now */,
        "America/Los_Angeles" /* Time zone of this job. */
    );
}

module.exports.runPeriod = runPeriod;
module.exports.runOnce = runScript;


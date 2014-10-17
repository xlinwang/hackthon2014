/**
 * Created by xwang17 on 10/16/14.
 */

var CronJob = require('cron').CronJob;
var events = require('events');
var pig = require('./service/pigActionHelper');


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
    var fileLocation = ''+fileName;
    return fileLocation;
}



eventEmitter.on('error', errorHandler);
eventEmitter.on('succeed', eventHandler);

function runScript(fileName, params, callback){
    if(validFile(fileName)){
        pig.register(generateLocation(fileName), function(res){
            if(isRegisterSucceed(res)){
                pig.submit(fileName, data, function(res){
                    if(isSubmitSucceed(jobId)){
                        var timerId = setInterval(function () {
                            pig.status(jobId, function(res){
                                if(res === "SUBMITTED"){
                                    log("processing ...");
                                }else if(res === "SUCCEED"){
                                    pig.retrieveOutput(jobId, function(data){
                                        eventEmitter("succeed", data, callback);
                                    });
                                    setInterval(timerId);
                                }else{
                                    eventEmitter('error', 'job failed', callback);
                                }
                            });
                        }, 5000);
                        clearInterval(timerId);
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

exports.runScriptPeriodically = function(fileName, callback){
    var job = new CronJob('* * * * * *',
        function(){
            console.log('on trick');
        },
        function () {
            console.log('complete');
        },
        true /* Start the job right now */,
        "America/Los_Angeles" /* Time zone of this job. */
    );

};

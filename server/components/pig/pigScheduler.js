/**
 * Created by xwang17 on 10/16/14.
 */

var logger = require("../../utils/logger");
var CronJob = require('cron').CronJob;
var events = require('events');
var pig = require('./pigActionHelper');
var exec = require('child_process').exec;

function Scheduler(fileName, period, params, callback){

    this.fileName = fileName;
    this.period = period;
    this.params = params;
    this.callback = callback;

    function execute(command, callback){
        exec(command, function(error, stdout, stderr){ callback(stdout); });
    };


    var utils = require('./utils')
    var eventEmitter = new events.EventEmitter();

    function log(msg){
        logger.info(msg)
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


    this.runScript = function(fileName, params, callback){
        pig.unregister(fileName, params, callback, afterUnregister)
    }

    function afterUnregister(res, fileName, params, callback){
        log(res + " : " + fileName+".pig");
        pig.register(fileName, params, generateLocation(fileName), callback, registerFile);
    }

    function registerFile(res, fileName, params, callback){
        log("PIG -- "+ fileName +" Registered file: " +res);
        if(isRegisterSucceed(res)){
            params.data.inputParameters.startDate = utils.genStartDate();
            params.data.inputParameters.endDate = utils.genEndDate();
            log("PIG -- "+"Job submitting: " + JSON.stringify(params));
            submitJob(fileName+'.pig', params.data, callback);
        }else{
        }
    }

    function submitJob(fileName, data, callback){
        pig.submit(fileName, data, callback, afterSubmit);
    }

    function afterSubmit(jobIdRes, fileName, data, callback){
        log("PIG -- "+fileName +" job " + jobIdRes + " has been submitted");
        if(isSubmitSucceed(jobIdRes)){
            var timerId = setInterval(function () {
                pig.status(jobIdRes, fileName, timerId, data, callback, checkStatus);
            }, 10000);
        }else{
        }
    };


    function checkStatus(status, jobIdRes, timerId, fileName, data, callback){
        log("PIG -- "+fileName+" job "+jobIdRes + " status: " + status);
        if(status === "SUBMITTED"){
            // continue
        }else if(status === "SUCCEEDED"){
            // clear and callback
            clearInterval(timerId);
            pig.retrieveOutput(jobIdRes, callback, data, afterSucceeded);
        }else{
            clearInterval(timerId);
            log("PIG -- Job "+jobIdRes+" failed!");

            //retry
            setTimeout(submitJob, 6000, fileName, data);
        }
    }

    function afterSucceeded(res, data, callback){
        if (callback && typeof(callback) === "function") {
            callback(res, data);
        } else {
            log(callback)
        }
    }


    this.runPeriod = function (){
        log(JSON.stringify(params));

        var runScript = this.runScript;
        var fileName = this.fileName;
        var params = this.params;
        var callback = this.callback;

        var job = new CronJob({cronTime : period,
                onTick : function(){
                    runScript(fileName, params, callback);
                },
                start:true,
                timeZone: "America/Los_Angeles"}
        );
    }
}

function getScheduler(fileName, period, params, callback){
    return new Scheduler(fileName, period, params, callback);
}


module.exports.getScheduler = getScheduler;



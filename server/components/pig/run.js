/**
 * Created by xwang17 on 10/30/14.
 */

var pig = require('./pigActionHelper');
var pigParams = require('./pigParams');
var utils = require('./utils');
var Q = require('q');
var fs = require('fs');

function log(msg){
    console.log(msg);
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

    var fileLocation = '../../public/pig/'+fileName+'.pig';
    return fileLocation;
}

function runScript(fileName, params, callback){
    if(validFile(fileName)){
        pig.unregister(fileName, params, callback, afterUnregister)

    }else{
        eventEmitter('error', "invalid file", callback);
    }
}

function afterUnregister(res, fileName, params, callback){
    log(res + " : " + fileName+".pig");
    pig.register(fileName, params, generateLocation(fileName), callback, registerFile);
}

function registerFile(res, fileName, params, callback){
    log("PIG -- "+"Registered file: " +res)
    if(isRegisterSucceed(res)){
        params.data.inputParameters.startDate = utils.genStartDate();
        params.data.inputParameters.endDate = utils.genEndDate();
        log("PIG -- "+"Job submitting: " + JSON.stringify(params));
        submitJob(fileName+'.pig', params.data, callback);
    }else{
        eventEmitter('error', "register failed", callback);
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
        eventEmitter('error', 'submit failed', callback);
    }
};


function checkStatus(status, jobIdRes, timerId, fileName, data, callback){
    log("PIG -- "+fileName+" job "+jobIdRes + " status: " + status);
    if(status === "SUBMITTED"){
        // continue
    }else if(status === "SUCCEEDED"){
        // clear and callback
        clearInterval(timerId);
        pig.retrieveOutput(jobIdRes, callback, afterSucceeded);
    }else{
        clearInterval(timerId);
        log("PIG -- Job "+jobIdRes+" failed!");

        //retry
        setTimeout(submitJob, 600000, fileName, data);
    }
}

function afterSucceeded(res, callback){
    if (callback && typeof(callback) === "function") {
        callback(res);
    } else {
        log(callback)
    }
}



var filename = "longUrl3Sec";
var testParams = pigParams.cosmosTestPig;
var cb0 = function(data){
    console.log("original");
    console.log(data);
};

runScript(filename, testParams, cb0);




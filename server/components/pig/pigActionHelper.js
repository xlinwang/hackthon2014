/**
 * Created by xwang17 on 10/16/14.
 */

var CronJob = require('cron').CronJob;
var exec = require('child_process').exec;
var logger = require("../../utils/logger");

//var rest = require('./httpHandler');
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

/**
 * register:  REST post request register a pig script
 * @param scriptString: http options object
 * @param callback: callback to pass the link of the script back
 */

exports.register = function(filename, params, filelocation, cb, callback){
    var finalCommand = 'curl -X POST http://appmon.vip.ebay.com/pig/script/'
        + filename+".pig"
        + ' -H "Content-Type: application/octet-stream" --data-binary '+ '@'
        + filelocation;
    logger.info(finalCommand);
    execute(finalCommand,
        function(res){
            console.log(res);
            callback(res, filename, params, cb);
        }
    );
};

exports.unregister = function(fileName, params, cb, callback){
    var finalCommand = 'curl -X DELETE http://appmon.vip.ebay.com/pig/script/'
        + fileName+'.pig';
    logger.info(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res, fileName, params, cb);
        }
    );
};

exports.retrieve = function(fileName, callback){
    var finalCommand = 'curl -X GET http://appmon.vip.ebay.com/pig/script/'
        + fileName;
    logger.info(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res);
        }
    );
};

exports.submit = function(fileName, data, cb, callback){
    var finalCommand = 'curl -X POST http://appmon.vip.ebay.com/pig/request/'
        + fileName
        + ' -H "Content-Type: application/json" '
        + '-d ' + "'"+ JSON.stringify(data) + "'";
    logger.info(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res, fileName, data, cb);
        }
    );
};

exports.retrieveInput = function(uuid, callback){
    var finalCommand = 'curl -X GET http://appmon.vip.ebay.com/pig/request/'
        + uuid;
    logger.info(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res);
        }
    );
};

exports.status = function(uuid, fileName, timerId, data, cb, callback){
    var finalCommand = 'curl -X GET http://appmon.vip.ebay.com/pig/request/'
        + uuid
        + '/status';
    logger.info(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res, uuid, timerId, fileName, data, cb);
        }
    );
};

exports.retrieveOutput = function(uuid, cb, data, callback){
    var finalCommand = 'curl -X GET http://appmon.vip.ebay.com/pig/request/'
        + uuid
        + '/output';
    logger.info(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res, data, cb);
        }
    );
};

exports.retrieveStats = function(uuid, callback){
    var finalCommand = 'curl -X GET http://appmon.vip.ebay.com/pig/request/'
        + uuid
        + '/stats';
    logger.info(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res);
        }
    );
};





/**
 * Created by xwang17 on 10/16/14.
 */

var CronJob = require('cron').CronJob;
var exec = require('child_process').exec;

var rest = require('./httpHandler');
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

/**
 * register:  REST post request register a pig script
 * @param scriptString: http options object
 * @param callback: callback to pass the link of the script back
 */

exports.register = function(filelocation, callback){
    var finalCommand = 'curl -X POST http://appmon.vip.ebay.com/pig/script/'
        + "testQQ.pig"
        + ' -H "Content-Type: application/octet-stream" --data-binary '+ '@'
        + filelocation;
    console.log(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res);
        }
    );
};

exports.unregister = function(fileName, callback){
    var finalCommand = 'curl -X DELETE http://appmon.vip.ebay.com/pig/script/'
        + fileName;
    console.log(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res);
        }
    );
};

exports.retrieve = function(fileName, callback){
    var finalCommand = 'curl -X GET http://appmon.vip.ebay.com/pig/script/'
        + fileName;
    console.log(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res);
        }
    );
};

exports.submit = function(fileName, data, callback){
    var finalCommand = 'curl -X POST http://appmon.vip.ebay.com/pig/request/'
        + fileName
        + ' -H "Content-Type: application/json" '
        + '-d ' + "'"+ JSON.stringify(data) + "'";
    console.log(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res);
        }
    );
};

exports.retrieveInput = function(uuid, callback){
    var finalCommand = 'curl -X GET http://appmon.vip.ebay.com/pig/request/'
        + uuid;
    console.log(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res);
        }
    );
};

exports.status = function(uuid, callback){
    var finalCommand = 'curl -X GET http://appmon.vip.ebay.com/pig/request/'
        + uuid
        + '/status';
    console.log(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res);
        }
    );
};

exports.retrieveOutput = function(uuid, callback){
    var finalCommand = 'curl -X GET http://appmon.vip.ebay.com/pig/request/'
        + uuid
        + '/output';
    console.log(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res);
        }
    );
};

exports.retrieveStats = function(uuid, callback){
    var finalCommand = 'curl -X GET http://appmon.vip.ebay.com/pig/request/'
        + uuid
        + '/stats';
    console.log(finalCommand);
    execute(finalCommand,
        function(res){
            callback(res);
        }
    );
};





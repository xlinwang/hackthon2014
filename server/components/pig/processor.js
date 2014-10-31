/**
 * Created by xwang17 on 10/21/14.
 */

var utils = require('./utils');

function apiErrorCallBack (data, params) {
    function cb(data){
        var rows = data.split('\n');
        var i = 0;
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var siteId = words[1];
            var version = words[2];
            var counts = words[3];

            if(counts !== undefined && counts != "") {
                var eventsdb = require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "TAPI", "CriticalError", counts, name, siteId, version, "");
            }
        }
    }
    cb(data);
}
function apiTimeoutCallBack (data, params) {
    function cb(data){
        var rows = data.split('\n');
        var i = 0;
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var siteId = words[1];
            var version = words[2];
            var counts = words[3];
            if(counts !== undefined && counts != "") {
                var eventsdb = require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "TAPI", "Timeout", counts, name, siteId, version, "");
            }
        }
    }
    cb(data);
}



function cosmosLongUrl3SecCallBack (data, params) {

    console.log(data);

    function writeIntoDB(data){
        var rows = data.split('\n');
        var i = 0;
        for (i; i<rows.length; i++) {
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var counts = words[1];
            if(counts !== undefined && counts != ""){
                var eventsdb=require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "COSMOS", "LongUrl3Sec",counts, name, "", "", "");
            }
        }
    }
    writeIntoDB(data)
}

function cosmosLongUrl4SecCallBack (data, params) {

    console.log(data);

    function writeIntoDB(data){
        var rows = data.split('\n');
        var i = 0;
        for (i; i<rows.length; i++) {
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var counts = words[1];
            if(counts !== undefined && counts != ""){
                var eventsdb=require('../eventsdb');
                eventsdb.insertEvent(utils.genCurrDate(), "COSMOS", "LongUrl4Sec",counts, name, "", "", "");
            }
        }
    }
    writeIntoDB(data)
}

function writeIntoFileCallBack (data, params) {
    var fs = require('fs');
    var crypto = require('crypto');
    var date = new Date();

    var filename = "regression" + date.getTime().toString()
        + "_" + crypto.createHash('md5').update(date.getTime().toString()).digest("hex") + "_" + "file1";

    fs.writeFile("./server/public/tmp/"+filename+".json", JSON.stringify(data), function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("File " + filename + ".json" + " has been saved to " + "public/tmp");
        }
    })
}

module.exports.cosmosLongUrl3SecCallBack = cosmosLongUrl3SecCallBack;
module.exports.cosmosLongUrl4SecCallBack = cosmosLongUrl4SecCallBack;
module.exports.apiErrorCallBack = apiErrorCallBack;
module.exports.apiTimeoutCallBack = apiTimeoutCallBack;
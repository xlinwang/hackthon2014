/**
 * Created by xwang17 on 10/21/14.
 */

var utils = require('./utils');

function apiErrorCallBack (data) {
    function cb(data){
        var rows = data.split('\n');
        var i = 0;
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var counts = words[1];

            var eventsdb=require('../eventsdb');
            eventsdb.insertEvent(utils.genCurrDate(), "TAPI", "Error",counts, name, "", "", "");

        }
    }
    cb(data);
}
function apiTimeoutCallBack (data) {
    function cb(data){
        var rows = data.split('\n');
        var i = 0;
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var counts = words[1];

            var eventsdb=require('../eventsdb');
            eventsdb.insertEvent(utils.genCurrDate(), "TAPI", "Timeout",counts, name, "", "", "");

        }
    }
    cb(data);
}



function cosmosCallBack (data) {

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
                eventsdb.insertEvent(utils.genCurrDate(), "COSMOS", "LongUrl",counts, name, "", "", "");
            }
        }
    }
    writeIntoDB(data)
}

function writeIntoFileCallBack (data) {
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

module.exports.cosmosCallBack = cosmosCallBack;
module.exports.apiErrorCallBack = apiErrorCallBack;
module.exports.apiTimeoutCallBack = apiTimeoutCallBack;
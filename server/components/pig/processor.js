/**
 * Created by xwang17 on 10/21/14.
 */



function apiCallBack () {

    var data = "AddOrder,102"+'\n'+"GetOrders,273200"

    function cb(data){

        var log = function(m){
            console.log(m);
        }
        log(data);
        var rows = data.split('\n');
        log(rows);
        var i = 0;
        log(rows.length);
        for(i; i<rows.length; i++){
            var row = rows[i];
            var words = row.split(',');
            var name = words[0];
            var counts = words[1];

            var eventsdb=require('../eventsdb');
            eventsdb.insertEvent("2014-01-01 00:00:00", "TAPI", "Error",counts, name, "", "", "");

            log(name);
            log(counts);
        }
    }
    cb(data);

}

function cosmosCallBack (data) {

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
    })}

module.exports.cosmosCallBack = cosmosCallBack;
module.exports.apiCallBack = apiCallBack;
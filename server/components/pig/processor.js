/**
 * Created by xwang17 on 10/21/14.
 */



function apiCallBack (data) {

    var fs = require('fs');
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
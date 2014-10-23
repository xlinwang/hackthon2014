/**
 * Created by xwang17 on 10/20/14.
 */

function genEndDate(){
    // For todays date;
    Date.prototype.today = function () {
        return this.getFullYear() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ ((this.getDate() < 10)?"0":"") + this.getDate();
    }

    // For the time now
    Date.prototype.timeNow = function () {
        var hour = this.getHours()-1;
        if(hour < 0){
            hour = 23;
        }
        return ((hour < 10)?"0":"") + hour +":"+ "00";
    }

    var datetime = new Date().today() + "-" + new Date().timeNow();
    return datetime;
//// For the time now
//    Date.prototype.timeNow = function () {
//        return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ "00";//((this.getMinutes() < 10)?"0":"") + this.getMinutes();
//    }
//
//    var datetime = new Date().today() + "-" + new Date().timeNow();
//    return datetime;
};


function genCurrDate(){
    // For todays date;
    Date.prototype.today = function () {
        return this.getFullYear() +"-"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"-"+ ((this.getDate() < 10)?"0":"") + this.getDate();
    }
// For the time now
    Date.prototype.timeNow = function () {
        return ((this.getHours() < 10)?"0":"") + this.getHours()
            +":"+((this.getMinutes() < 10)?"0":"") + this.getMinutes()
            +":"+((this.getSeconds() < 10)?"0":"") + this.getSeconds();
    }

    var datetime = new Date().today() + " " + new Date().timeNow();
    return datetime;
};

function genStartDate(){
    // For todays date;
    Date.prototype.today = function () {
        return this.getFullYear() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ ((this.getDate() < 10)?"0":"") + this.getDate();
    }
// For the time now
    Date.prototype.timeNow = function () {
        var hour = this.getHours()-2;
        if(hour < 0){
            hour = 23;
        }
        return ((hour < 10)?"0":"") + hour +":"+ "00";
    }

    var datetime = new Date().today() + "-" + new Date().timeNow();
    return datetime;
};


module.exports.genStartDate = genStartDate;
module.exports.genEndDate = genEndDate;
module.exports.genCurrDate = genCurrDate;

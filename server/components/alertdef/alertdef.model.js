'use strict';

var eventsdb=require('../eventsdb');
var q=require('q');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AlertDefSchema = new Schema({
	module: String,
	usecase: String,
	dimension1: String,
	dimension2: String,
	dimension3: String,
	aggregateType: String,
	operator: String,
	duration: Number,
	treshold: Number,
	email:String
});

AlertDefSchema.methods.shouldAlert=function() {
	var query='SELECT ';
	if('sum'==this.aggregateType) {
		query=query + 'SUM';
	} else if('avg'==this.aggregateType) {
		query=query + 'AVG';
	}
	query=query+'(VALUE) as result FROM EVENTS WHERE ';
	if(this.module) {
		query=query+"MODULE='"+this.module+"' ";
	}
	if(this.usecase) {
		query=query+"AND usecase='"+this.usecase+"' ";
	}
	if(this.dimension1) {
		query=query+"AND dimension1='"+this.dimension1+"' ";
	}
	if(this.dimension2) {
		query=query+"AND dimension2='"+this.dimension2+"' ";
	}
	if(this.dimension3) {
		query=query+"AND dimension3='"+this.dimension3+"' ";
	}
	query=query+' AND EVENT_DATE BETWEEN ? AND ?';
	var op=this.operator;
	var tres=this.treshold;
	var now=new Date();
	var start=new Date(now.getTime()-(this.duration*1000));
	return eventsdb.executeQuery(query,[start,now]).then(function(result){
		var value=result[0].result;
		var alert=false;
		if(op=='gt') {
			if(value>tres) {
				alert=true;
			}
		}
		if(op=='lt') {
			if(value<tres) {
				alert=true;
			}
		}
		return alert;
	});

}
module.exports = mongoose.model('AlertDef', AlertDefSchema);
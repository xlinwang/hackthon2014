'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AlertDefSchema = new Schema({
	module: String,
	usecase: String,
	dimension1: String,
	dimension2: String,
	dimension3: String,
	aggregateType: String,
	duration: Number,
	treshold: Number,
	email:String
});

module.exports = mongoose.model('AlertDef', AlertDefSchema);
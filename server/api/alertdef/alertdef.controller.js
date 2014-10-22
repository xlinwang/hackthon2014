'use strict';

var _ = require('lodash');
var alertdefds=require('../../components/alertdef/alertdef');

exports.index = function(req, res) {
	alertdefds.getAllAlertDefinitions().then(function(alerts){
		return res.json(200,alerts);
	},function(err) {
		return res.send(500, err);
	});
};

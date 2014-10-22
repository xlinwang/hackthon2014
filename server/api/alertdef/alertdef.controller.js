'use strict';

var alertdefds=require('../../components/alertdef/alertdef');

exports.index = function(req, res) {
	alertdefds.getAllAlertDefinitions().then(function(alerts){
		return res.json(200,alerts);
	},function(err) {
		return res.send(500, err);
	});
};

exports.create = function(req, res) {
	alertdefds.insertAlertDef(req.body).then(function(){
		return res.json(201)
	},function(err){
		return res.send(500, err);
	});
};

exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  alertdefds.update(req.params.id,req.body).then(function(numberAffected){
  	return res.json(200,numberAffected);
  },function(err){
	return res.send(500, err);
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
 
};
'use strict';

var connectionpool=null;

exports.setConnectionPool=function(cp) {
	connectionpool=cp;
}

exports.getConnectionPool=function() {
	return connectionpool;
}
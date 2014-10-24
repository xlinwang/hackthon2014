'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://10.9.241.212/comsmonitoring-dev'
  },

  seedDB: true,

  mysql: {
  	host: '10.9.241.202',
  	port: 3306,
  	user: 'root',
  	password: 'gvMw7TTcnRsTyyGxDedVwcKFd3RFds2V3WPA',
  	database: 'coms_monitoring_dev',
  	connectionLimit: 3
  }
};

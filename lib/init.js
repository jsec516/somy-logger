var winston = require('winston'),
    adapters = require('./adapters'),
    activeAdapters = ['papertrail', 'console'];

module.exports = init;

function init() {
  var transports = [];
  activeAdapters.forEach(function(item) {
    transports.push(adapters[item])
  });

  logger = new winston.Logger({
    transports: transports
  });

  return logger;
}

var winston = require('winston'),
    papertrail;
// 
// Requiring `winston-papertrail` will expose 
// `winston.transports.Papertrail` 
// 
require('winston-papertrail').Papertrail;




function init() {
  var winstonPapertrail = new winston.transports.Papertrail({
    host: 'logs.papertrailapp.com',
    port: 12345,
    logFormat: function(level, message) {
      return '<<<' + level + '>>> ' + message;
    }
  });

  winstonPapertrail.on('error', function(err) {
    // Handle, report, or silently ignore connection errors and failures
    console.log('Error in papertrail: ', err.message || err);
  });

  return winstonPapertrail;
}

module.exports = (function() {
  if (!papertrail) {
    papertrail = init();
  }
  return papertrail;
})();

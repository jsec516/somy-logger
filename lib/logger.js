var init  = require('./init'),
    winLogger = init();

module.exports = {
  info: function(message) {
    winLogger.info(message);
  },

  log: function(message) {
    winLogger.log(message);
  },

  error: function(err) {
    var message = err && err.message;
    winLogger.error(message);
  }
};

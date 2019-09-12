var stylus = require('stylus');

module.exports = function(style) {
	style.define('exists', function(path) {
		return !!stylus.utils.lookup(path.string, this.paths);
	});
};

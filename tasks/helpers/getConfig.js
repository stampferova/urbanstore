var config = require('../../config.js');

var merge = require('deepmerge');
var gutil = require('gulp-util');

try {
	var localConfig = require('../../config.local.js');
	config = merge(config, localConfig);
	gutil.log(gutil.colors.magenta('Using local configuration.'));
} catch (exception) {
	gutil.log(gutil.colors.magenta('Using global configuration only. For local configuration create config.local.js (duplicate and rename config.local.example.js).'));
}

module.exports = config;

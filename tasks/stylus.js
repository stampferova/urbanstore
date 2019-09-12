var config = require('./helpers/getConfig.js');
var isProduction = require('./helpers/isProduction.js');
var stylExists = require('./helpers/stylExists.js');

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var poststylus = require('poststylus');
var autoprefixer = require('autoprefixer');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');


gulp.task('stylus', function() {
	var onError = function(error) {
		notify.onError({
			title: 'Stylus error!',
			message: '<%= error.message %>',
			sound: 'Beep',
		})(error);

		return this.emit('end');
	};

	var settings = {
		paths: ['bower_components', 'node_modules'],
		use: [
			poststylus([
				autoprefixer(),
			]),
			stylExists,
		],
		rawDefine: {
			data: config,
		},
		compress: isProduction(),
		linenos: false,
		firebug: false,
		'include css': true,
	};

	var stream = gulp.src([
		'*.styl',
	], {
		cwd: config.src.styles,
	});

	stream
		.pipe(plumber({
			errorHandler: onError,
		}))
		.pipe(isProduction()
			? gutil.noop()
			: sourcemaps.init(),
		)
		.pipe(stylus(settings))
		.pipe(isProduction()
			? gutil.noop()
			: sourcemaps.write('./'),
		)
		.pipe(gulp.dest(config.dest.styles));

	return stream;
});

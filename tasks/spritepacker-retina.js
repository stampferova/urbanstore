var config = require('./helpers/getConfig.js');

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');


gulp.task('spritepacker-retina', function() {
	var sprites = gulp.src([
		'*.png',
		'!_no-delete.png',
	], {
		cwd: config.src.images + 'bg/sprites-retina/',
	});

	sprites = sprites.pipe(spritesmith({
		padding: 2,
		imgName: 'sprites-retina.png',
		imgPath: 'sprites-retina.png' + ('?v=' + (new Date().getTime())),
		cssName: 'sprites-retina.styl',
		cssFormat: 'stylus',
		algorithm: 'binary-tree',
		cssTemplate: config.src.styles + 'tpl/sprites-retina.css.tpl',
	}));

	sprites.img.pipe(gulp.dest(config.dest.images + 'bg/'));
	sprites.css.pipe(gulp.dest(config.src.styles + 'core/generated/'));

	return sprites;
});

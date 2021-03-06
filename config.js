var basePath = {
	src: 'src/',
	dest: 'web/',
	assets: '../',
};

var src = {
	fonts: basePath.src + 'fonts/',
	icons: basePath.src + 'img/bg/icons/',
	iconsSVG: basePath.src + 'img/bg/icons-svg/',
	images: basePath.src + 'img/',
	scripts: basePath.src + 'js/',
	styles: basePath.src + 'css/',
	templates: basePath.src + 'tpl/',
};

var dest = {
	fonts: basePath.dest + 'fonts/',
	images: basePath.dest + 'img/',
	scripts: basePath.dest + 'js/',
	styles: basePath.dest + 'css/',
	templates: basePath.dest + 'tpl/',
};

var assets = {
	fonts: basePath.assets + 'fonts/',
	images: basePath.assets + 'img/',
	scripts: basePath.assets + 'js/',
	styles: basePath.assets + 'css/',
};

var webpack = {
	stats: {
		colors: true,
		hash: false,
		timings: true,
		assets: true,
		chunks: false,
		chunkModules: false,
		modules: false,
		children: true,
		version: false,
	},
};

var browserSync = {
	open: false,
	notify: false,
	reloadThrottle: 1000,
	watch: true,
	server: {
		baseDir: basePath.dest,
	},
};

module.exports = {
	basePath: basePath,
	src: src,
	dest: dest,
	assets: assets,
	webpack: webpack,
	browserSync: browserSync,
};

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var shim = require('browserify-shim');

gulp.task('default', function () {
	browserify('webparts/webparta/index.jsx')
		.transform(babelify, {
			presets: ['es2015', 'react']
		})
		.transform(shim)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./'));
});



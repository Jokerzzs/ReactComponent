var gulp = require('gulp');
var requireDir = require('require-dir');
var minimist = require('minimist');

var knownOptions = {
    string: 'env',
    default: { env: process.env.NODE_ENV || 'production' }
};
var options = minimist(process.argv.slice(2), knownOptions);

requireDir('./gulp/tasks', { recurse: true });

gulp.task('build', function () {
    if (options.env === 'debug') {
        gulp.start('buildjs-dev', 'buildless-dev', 'buildfile-dev');
    }
    else {
        gulp.start('buildjs', 'buildless', 'buildfile');
    }
})

gulp.task('build-dev', function () {
    gulp.start('buildjs-dev', 'buildless-dev', 'buildfile-dev');
})
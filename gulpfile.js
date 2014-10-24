var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulp = require('gulp');
var runSequence = require('run-sequence');

// require external tasks
require('./gulp/concat.js');
require('./gulp/server.js');
require('./gulp/test.js');
require('./gulp/watch.js');

//configure grunt
var configs = {
	paths: {
		files: {
			js: ['./src/app/**/*.js', '!./src/app/bundle.js']
		},
		build: {
			js: 'bundle.js'
		}
	}
};

gulp.task('lint', function() {
  return gulp.src(configs.paths.files.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('serve', function (callback) {
  runSequence(
    'build',
    'server:start',
    'watch'
  );
});
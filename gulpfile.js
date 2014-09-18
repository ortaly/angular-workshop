var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulp   = require('gulp');
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
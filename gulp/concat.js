var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

module.exports = gulp.task('build', function() {
  gulp.src([
  	'!./src/app/bundle.js',
  	'!./src/app/**/*.spec.js',
  	'./src/app/**/*.mdl.js', 
  	'./src/app/**/*.js', 
  	])
  	.pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/app'));
});
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

module.exports = gulp.task('build', function() {
  gulp.src(['./src/app/**/*.js', '!./src/app/bundle.js'])
  	.pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/app'));
});
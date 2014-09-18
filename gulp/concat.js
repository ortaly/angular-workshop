var gulp = require('gulp');
var concat = require('gulp-concat');

module.exports = gulp.task('build', function() {
  gulp.src(['./src/app/**/*.js', '!./src/app/bundle.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./src/app'));
});
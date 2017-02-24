var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  cleanCss = require('gulp-clean-css');
  watch = require('gulp-watch');


gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('styles', function(){
  gulp.src('src/css/*.css')
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/css/*.css', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);

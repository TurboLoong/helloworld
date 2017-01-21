var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

//定义html任务
gulp.task('html', function () {
  gulp.src('./client/html/*.html')
  .pipe(connect.reload());
});
gulp.task('js', function () {
  gulp.src('./client/src/**/*.js')
    .pipe(connect.reload());
});
gulp.task('watch', function () {
  gulp.watch('client/html/**/*.html', ['html']);
  gulp.watch('client/js/**/*.js', ['js']);
});

gulp.task('default', ['html', 'js', 'watch','connect']);
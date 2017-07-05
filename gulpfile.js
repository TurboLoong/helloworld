var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
// 静态服务器
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("client/html/**/*.html").on('change', reload);
  gulp.watch("client/src/**/*.js").on('change', reload);
  gulp.watch("client/css/**/*.css").on('change', reload);
});

gulp.task('copy', function () {
    gulp.src('')
})
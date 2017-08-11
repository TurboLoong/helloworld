var gulp        = require('gulp');
const babel = require('gulp-babel');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
gulp.task('convertJS', function(){
    return gulp.src('client/src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js'))
})
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

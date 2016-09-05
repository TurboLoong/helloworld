/**
 * @fileOverview [description]
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-22 
 */

var gulp = require('gulp');

// include plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

//JS hint task
gulp.task('jsint', function() {
   gulp.src('./src/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    gulp.src(['./src/*.js'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('./dist/js/'));
});
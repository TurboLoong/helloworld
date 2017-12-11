'use strict';
import fs from 'fs';
import gulp from 'gulp';
import del from 'del';
import zip from 'gulp-zip';

const BUILD_PATH = 'build';                             // 编译文件
const DIST_PATH = 'dist';                               // 目的地文件
const config = JSON.parse(fs.readFileSync('./package.json'));
const PACKAGE_NAME = config.packageName;        // 打包生成的文件名, 如www.bbdservice.com

// 清除dist目录
gulp.task('clean', () => {
    return del([DIST_PATH, BUILD_PATH]);
});
// 文件打包
gulp.task('package', ['clean'], () => {
    return gulp.src(`${BUILD_PATH}/**`)
        .pipe(gulp.dest(`${DIST_PATH}/${PACKAGE_NAME}/`));
});
// 将静态资源压缩为zip格式
gulp.task('zip', ['package'], () => {
    return gulp.src(`${DIST_PATH}/**`, {base: `${DIST_PATH}/`})
               .pipe(zip(`${PACKAGE_NAME}.zip`))
               .pipe(gulp.dest(DIST_PATH));
});


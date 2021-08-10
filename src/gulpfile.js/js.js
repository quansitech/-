const gulp = require('gulp');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const named = require('vinyl-named');
const lazypipe = require('lazypipe');
const WEBPACK_CONFIG = require('../webpack.config.js');
const html = require('./html');
const rev = require('gulp-rev-gqy');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

const utils = require('./utils');
const STATIC_PATH_RESULT = utils.getStaticPathResult();
const REV_PATH_RESULT = utils.getRevPathResult();

const JS_PIPE = lazypipe()
    .pipe(named)
    .pipe(gulpWebpack, WEBPACK_CONFIG, webpack)
    .pipe(babel, {
        presets: ['@babel/env']
    });


const REV_PIPE = lazypipe()
    .pipe(rev.manifest);

function defaultJs(){
    return gulp.src(STATIC_PATH_RESULT.default.js.srcPath, {sourcemaps: true})
        .pipe(JS_PIPE())
        .pipe(gulp.dest(STATIC_PATH_RESULT.default.js.distPath, {sourcemaps: '.'}))
        .pipe(rev())
        .pipe(REV_PIPE())
        .pipe(gulp.dest(REV_PATH_RESULT.default.js.path));
}

function watchDefaultJs(cb){
    gulp.watch(STATIC_PATH_RESULT.default.js.watchFilePath,{
        ignoreInitial: false,
    }, gulp.series(defaultJs, html.default)).on('change', browserSync.reload);
    cb();
}


function mobileJs(){
    return gulp.src(STATIC_PATH_RESULT.mobile.js.srcPath, {sourcemaps: true})
        .pipe(JS_PIPE())
        .pipe(gulp.dest(STATIC_PATH_RESULT.mobile.js.distPath, {sourcemaps: '.'}))
        .pipe(rev())
        .pipe(REV_PIPE())
        .pipe(gulp.dest(REV_PATH_RESULT.mobile.js.path));
}

function watchMobileJs(cb){
    gulp.watch(STATIC_PATH_RESULT.mobile.js.watchFilePath,{
        ignoreInitial: false,
    }, gulp.series(mobileJs, html.mobile)).on('change', browserSync.reload);
    cb();
}


exports.defaultJs = gulp.series(defaultJs, html.default);
exports.watchDefaultJs = watchDefaultJs;
exports.mobileJs = gulp.series(mobileJs, html.mobile);
exports.watchMobileJs = watchMobileJs;
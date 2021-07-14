const gulp = require('gulp');
const lazypipe = require('lazypipe');
const sass = require('gulp-sass')(require('sass'));
const html = require('./html');
const rev = require('gulp-rev-gqy');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

const utils = require('./utils');
const STATIC_PATH_RESULT = utils.getStaticPathResult();
const REV_PATH_RESULT = utils.getRevPathResult();

const CSS_PIPE = lazypipe()
    .pipe(()=>sass().on('error', sass.logError))
    .pipe(autoprefixer, {
        cascade: false
    });

const REV_PIPE = lazypipe()
    .pipe(rev.manifest);


function defaultCss(){
    return gulp.src(STATIC_PATH_RESULT.default.css.srcPath, {sourcemaps: true})
        .pipe(CSS_PIPE())
        .pipe(gulp.dest(STATIC_PATH_RESULT.default.css.distPath, {sourcemaps: '.',}))
        .pipe(rev())
        .pipe(REV_PIPE())
        .pipe(gulp.dest(REV_PATH_RESULT.default.css.path));
}

function watchDefaultCss(cb){
    gulp.watch(STATIC_PATH_RESULT.default.css.watchFilePath,{
        ignoreInitial: false,
    }, gulp.series(defaultCss, html.default)).on('change', browserSync.stream);
    cb();
}

function mobileCss(){
    return gulp.src(STATIC_PATH_RESULT.mobile.css.srcPath, {sourcemaps: true})
        .pipe(CSS_PIPE())
        .pipe(gulp.dest(STATIC_PATH_RESULT.mobile.css.distPath, {sourcemaps: '.',}))
        .pipe(rev())
        .pipe(REV_PIPE())
        .pipe(gulp.dest(REV_PATH_RESULT.mobile.css.path));
}

function watchMobileCss(cb){
    gulp.watch(STATIC_PATH_RESULT.mobile.css.watchFilePath,{
        ignoreInitial: false,
    }, gulp.series(mobileCss, html.mobile)).on('change', browserSync.stream);
    cb();
}

exports.defaultCss = gulp.series(defaultCss, html.mobile);
exports.watchDefaultCss = watchDefaultCss;
exports.mobileCss = gulp.series(mobileCss, html.mobile);
exports.watchMobileCss = watchMobileCss;
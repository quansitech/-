const gulp = require('gulp');
const lazypipe = require('lazypipe');
const revCollector = require('gulp-rev-collector-gqy');
const filter = require('gulp-filter');

const utils = require('./utils');
const HTML_PATH_RESULT = utils.getHtmlPathResult();
const REV_PATH_RESULT = utils.getRevPathResult();

const REV_PIPE = lazypipe()
    .pipe(revCollector);

const HTML_FILTER = lazypipe()
    .pipe(filter, '**/*.html');

function defaultHtml(){
    return gulp.src([
        `${REV_PATH_RESULT.default.css.path}/*.json`,
        `${REV_PATH_RESULT.default.js.path}/*.json`,
        ...HTML_PATH_RESULT.default.paths
    ], {
        allowEmpty: true,
    })
        .pipe(REV_PIPE())
        .pipe(HTML_FILTER())
        .pipe(gulp.dest(HTML_PATH_RESULT.default.dir));
}


function mobileHtml(){
    return gulp.src([
        `${REV_PATH_RESULT.mobile.css.path}/*.json`,
        `${REV_PATH_RESULT.mobile.js.path}/*.json`,
        ...HTML_PATH_RESULT.mobile.paths
    ], {
        allowEmpty: true,
    })
        .pipe(REV_PIPE())
        .pipe(HTML_FILTER())
        .pipe(gulp.dest(HTML_PATH_RESULT.mobile.dir));
}


exports.default = defaultHtml;
exports.mobile = mobileHtml;

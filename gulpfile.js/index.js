const { series, parallel, watch } = require('gulp');
const css = require('./css');
const js = require('./js');
const serve = require('./serve');
const ignore = require('./ignore');

const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const stream = browserSync.stream;


const DEFAULT_RELOAD = parallel(css.watchDefaultCss,js.watchDefaultJs);
const DEFAULT_RUN = parallel(css.defaultCss,js.defaultJs);

const MOBILE_RELOAD = parallel(css.watchMobileCss,js.watchMobileJs);
const MOBILE_RUN = parallel(css.mobileCss,js.mobileJs);

const RELOAD = parallel(DEFAULT_RELOAD,MOBILE_RELOAD);

exports['default:reload'] = parallel(DEFAULT_RELOAD, serve.serve);
exports['mobile:reload'] = parallel(MOBILE_RELOAD, serve.serve);
exports['reload'] = parallel(RELOAD, serve.serve);

exports['default:run'] = DEFAULT_RUN;
exports['mobile:run'] = MOBILE_RUN;




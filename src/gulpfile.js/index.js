const { series, parallel, watch } = require('gulp');
const css = require('./css');
const js = require('./js');
const html = require('./html');
const serve = require('./serve');

const browserSync = require('browser-sync').create();

const DEFAULT_WATCH = parallel(css.watchDefaultCss,js.watchDefaultJs);
const DEFAULT_RUN = parallel(css.defaultCss,js.defaultJs);

const MOBILE_WATCH = parallel(css.watchMobileCss,js.watchMobileJs);
const MOBILE_RUN = parallel(css.mobileCss,js.mobileJs);

const RELOAD = parallel(DEFAULT_WATCH, MOBILE_WATCH);

exports['default:reload'] = parallel(DEFAULT_WATCH, serve.serve);
exports['mobile:reload'] = parallel(MOBILE_WATCH, serve.serve);
exports['reload'] = parallel(RELOAD, serve.serve);

exports['default:run'] = DEFAULT_RUN;
exports['mobile:run'] = MOBILE_RUN;




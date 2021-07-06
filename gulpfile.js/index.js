const { series, parallel, watch } = require('gulp');
const css = require('./css');
const js = require('./js');
const serve = require('./serve');
// const html = require('./html');
// const utils = require('./utils');
// const PATH_RESULT = utils.getStaticPathResult();
// const STATIC_PATH_RESULT = utils.getStaticPathResult();

// getHtmlPathResult {
// default: {
//         dir: './app/Home/View/default/Public',
//             paths: [
//             './app/Home/View/default/Public/head.html',
//             './app/Home/View/default/Public/footer.html'
//         ]
//     },
//     mobile: {
//         dir: './app/Home/View/mobile/Public',
//             paths: [
//             './app/Home/View/mobile/Public/head.html',
//             './app/Home/View/mobile/Public/footer.html'
//         ]
//     }
// }

// getRevPathResult {
// default: {
//         css: { path: '.tmp/rev/default/css' },
//         js: { path: '.tmp/rev/default/js' }
//     },
//     mobile: {
//         css: { path: '.tmp/rev/mobile/css' },
//         js: { path: '.tmp/rev/mobile/js' }
//     }
// }





// PATH_RESULT {
// default: {
//         css: {
//             srcPath: './Public/static/default/src/css/style.less',
//                 distPath: './Public/static/default/dist/css',
//                 watchFilePath: '["./Public/static/default/src/commonStyle/*.less","./Public/static/default/src/css/*.less"]'
//         },
//         js: {
//             srcPath: './Public/static/default/src/js/app.ts',
//                 distPath: './Public/static/default/dist/js',
//                 watchFilePath: '["./Public/static/default/src/commonScript/*.ts","./Public/static/default/src/js/*.ts"]'
//         }
//     },
//     mobile: {
//         css: {
//             srcPath: './Public/static/mobile/src/css/style.less',
//                 distPath: './Public/static/mobile/dist/css',
//                 watchFilePath: '["./Public/static/mobile/src/commonStyle/*.less","./Public/static/mobile/src/css/*.less"]'
//         },
//         js: {
//             srcPath: './Public/static/mobile/src/js/app.ts',
//                 distPath: './Public/static/mobile/dist/js',
//                 watchFilePath: '["./Public/static/mobile/src/commonScript/*.ts","./Public/static/mobile/src/js/*.ts"]'
//         }
//     }
// }

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




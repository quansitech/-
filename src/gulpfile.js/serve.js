const browserSync = require('browser-sync').create();
const md5 = require('md5');
require('dotenv').config();
const gulp = require('gulp');

function getPort(domain){
    if(!domain){
        throw new Error(`DOMAIN is not defined! Please set DOMAIN at .env file`);
    }
    const PORT_STRING_START_POS = 0;
    const PORT_LENGTH = 4;
    return md5(domain).replace(/[^[1-9]/g,'').substr(PORT_STRING_START_POS, PORT_LENGTH);
}

function serve(cb) {
    gulp.watch([
        './app/**/*.html',
        './app/**/*.blade.php'
    ]).on('change', browserSync.reload);

    browserSync.init({
        proxy: process.env.DOMAIN,
        port: getPort(process.env.DOMAIN),
    });

    cb();
}

exports.serve = serve;
const browserSync = require('browser-sync').create();
const md5 = require('md5');
require('dotenv').config();

function getPort(domain){
    const PORT_STRING_START_POS = 0;
    const PORT_LENGTH = 4;
    return md5(domain).replace(/[^\d]/g,'').substr(PORT_STRING_START_POS, PORT_LENGTH);
}

function serve() {
    return browserSync.init({
        proxy: process.env.DOMAIN,
        port: getPort(process.env.DOMAIN),
    });
}

exports.serve = serve;
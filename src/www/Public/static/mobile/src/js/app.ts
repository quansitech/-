var vars = require('./vars');
var commonName = require('../../../commonScript/vars');

var hello = (compiler: string)=> {
    console.log(`Hello from ${compiler}`);
}

hello(vars.name);
hello(commonName.name);

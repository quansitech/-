const config = require('./config.json');

const getStaticPath = (path)=>{
    const {
        base,
        module,
        type,
    } = path.static;
    const RESULT = {};
    for(let moduleKey in module){
        const MODULE_ITEM = module[moduleKey];
        for(let typeKey in type){
            const TYPE_ITEM = type[typeKey];
            RESULT[moduleKey] = RESULT[moduleKey] || {};
            RESULT[moduleKey][typeKey] = {
                srcPath: [
                    `${base}${MODULE_ITEM.base}${MODULE_ITEM.src}${TYPE_ITEM.path}/${TYPE_ITEM.entryFileName}`
                ],
                distPath: `${base}${MODULE_ITEM.base}${MODULE_ITEM.dist}${TYPE_ITEM.path}`,
                watchFilePath: [
                    `${base}${MODULE_ITEM.base}${MODULE_ITEM.src}${TYPE_ITEM.commonPath}/${TYPE_ITEM.filePath}`,
                    `${base}${MODULE_ITEM.base}${MODULE_ITEM.src}${TYPE_ITEM.path}/${TYPE_ITEM.filePath}`
                ],
            };
        }
    }

    return RESULT;
}


const getStaticPathResult = ()=>{
    return getStaticPath(config.path);
};


const getHtmlPath = (path)=>{
    const {
        base,
        module,
    } = path.html;
    const RESULT = {};
    for(let moduleKey in module){
        const MODULE_ITEM = module[moduleKey];
        RESULT[moduleKey] = RESULT[moduleKey] || [];
        RESULT[moduleKey] = {
            dir: `${base}${MODULE_ITEM.base}`,
            paths: MODULE_ITEM.path.map((item)=>{
                return `${base}${MODULE_ITEM.base}${item}`;
            })
        }
    }

    return RESULT;
}

const getHtmlPathResult = ()=>{
    return getHtmlPath(config.path);
};

const getRevPath = (path)=>{
    const {
        base,
        module,
        type,
    } = path.rev;
    const RESULT = {};
    for(let moduleKey in module){
        const MODULE_ITEM = module[moduleKey];
        RESULT[moduleKey] = RESULT[moduleKey] || {};

        for(let typeKey in type){
            const TYPE_ITEM = type[typeKey];
            RESULT[moduleKey] = RESULT[moduleKey] || {};
            RESULT[moduleKey][typeKey] = {
                path: `${base}${MODULE_ITEM}${TYPE_ITEM}`
            };
        }

    }

    return RESULT;
}

const getRevPathResult = ()=>{
    return getRevPath(config.path);
};



exports.getStaticPath = getStaticPath;
exports.getStaticPathResult = getStaticPathResult;

exports.getHtmlPath = getHtmlPath;
exports.getHtmlPathResult = getHtmlPathResult;

exports.getRevPath = getRevPath;
exports.getRevPathResult = getRevPathResult;


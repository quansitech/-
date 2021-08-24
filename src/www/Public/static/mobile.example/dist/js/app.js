/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./www/Public/static/commonScript/vars.ts":
/*!************************************************!*\
  !*** ./www/Public/static/commonScript/vars.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports) {

var TEST_NAME = 'viki';
exports.name = TEST_NAME;


/***/ }),

/***/ "./www/Public/static/mobile/src/js/vars.ts":
/*!*************************************************!*\
  !*** ./www/Public/static/mobile/src/js/vars.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports) {

exports.name = 'lucy';


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************************************!*\
  !*** ./www/Public/static/mobile/src/js/app.ts ***!
  \************************************************/
var vars = __webpack_require__(/*! ./vars */ "./www/Public/static/mobile/src/js/vars.ts");
var commonName = __webpack_require__(/*! ../../../commonScript/vars */ "./www/Public/static/commonScript/vars.ts");
var hello = function (compiler) {
    console.log("Hello from " + compiler);
};
hello(vars.name);
hello(commonName.name);

}();
var __webpack_export_target__ = window;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=app.js.map
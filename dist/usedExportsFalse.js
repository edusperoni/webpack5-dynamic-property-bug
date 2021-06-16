/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./src/baseclass.mjs
class baseclass_BaseClass {

}

;// CONCATENATED MODULE: ./src/dynamic-property.mjs
class MyProperty {
    constructor() {
        this.native = 'native';
    }
}

const dynamic_property_property = new MyProperty();
;// CONCATENATED MODULE: ./src/bug.mjs



const buildType =  true ? 'usedExports' : 0;


class NotExportedExtended extends (/* unused pure expression or super */ null && (BaseClass)) {
    [property.native]() {
        console.log('unexported extended');
    }
}

class ExportedExtended extends baseclass_BaseClass {
    [dynamic_property_property.native]() {
        console.log('exported extended');
    }
}

class ExportedExtendedAndUsed extends baseclass_BaseClass {
    [dynamic_property_property.native]() {
        console.log('exported extended and used', buildType);
    }
}

class NotExportedNotExtended { // does not extend baseclass
    [dynamic_property_property.native]() {
        console.log('unexported unextended');
    }
}

class ExportedNotExtended { // does not extend baseclass
    [dynamic_property_property.native]() {
        console.log('exported unextended');
    }
}

class DummyClass {
    working() {
        console.log("I'm working!", buildType);
    }
}
;// CONCATENATED MODULE: ./src/index.mjs


new ExportedExtendedAndUsed(); // will export as expected

const dummy = new DummyClass();
dummy.working();

/******/ })()
;
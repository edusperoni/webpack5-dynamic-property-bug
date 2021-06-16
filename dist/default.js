/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

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



const buildType =  true ? 'default' : 0;


class NotExportedExtended extends (/* unused pure expression or super */ null && (BaseClass)) {
    [property.native]() {
        console.log('unexported extended');
    }
}

class ExportedExtended extends (/* unused pure expression or super */ null && (BaseClass)) {
    [property.native]() {
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
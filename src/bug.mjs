import { BaseClass } from './baseclass.mjs';
import { property } from './dynamic-property.mjs';

const buildType = typeof WEBPACK_BUILD_NAME !== 'undefined' ? WEBPACK_BUILD_NAME : 'nowebpack';


class NotExportedExtended extends BaseClass {
    [property.native]() {
        console.log('unexported extended');
    }
}

export class ExportedExtended extends BaseClass {
    [property.native]() {
        console.log('exported extended');
    }
}

export class ExportedExtendedAndUsed extends BaseClass {
    [property.native]() {
        console.log('exported extended and used', buildType);
    }
}

class NotExportedNotExtended { // does not extend baseclass
    [property.native]() {
        console.log('unexported unextended');
    }
}

export class ExportedNotExtended { // does not extend baseclass
    [property.native]() {
        console.log('exported unextended');
    }
}

export class DummyClass {
    working() {
        console.log("I'm working!", buildType);
    }
}
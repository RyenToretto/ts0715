"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cannotWrite = exports.addAge = void 0;
function addAge(constructor) {
    constructor.prototype.age = 18;
}
exports.addAge = addAge;
function cannotWrite(target, propertyKey, descriptor) {
    console.log(target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
    descriptor.writable = false;
}
exports.cannotWrite = cannotWrite;

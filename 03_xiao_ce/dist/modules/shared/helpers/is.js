"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConstructor = exports.isFunction = exports.notUndefined = exports.isString = void 0;
function isString(test) {
    return typeof test === 'string';
}
exports.isString = isString;
function notUndefined(item) {
    return item != undefined && item != 'undefined';
}
exports.notUndefined = notUndefined;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
function isConstructor(symbol) {
    return notUndefined(symbol) &&
        symbol instanceof Function &&
        symbol.constructor &&
        symbol.constructor instanceof Function &&
        notUndefined(new symbol) &&
        Object.getPrototypeOf(symbol) !== Object.prototype &&
        symbol.constructor !== Object &&
        symbol.prototype.hasOwnProperty('constructor');
}
exports.isConstructor = isConstructor;

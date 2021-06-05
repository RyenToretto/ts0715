"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValue = exports.printArrayLength = exports.swapTuple = exports.returnItemNumber = exports.returnItemString = exports.returnItem = void 0;
var returnItem = function (para) {
    return para;
};
exports.returnItem = returnItem;
var returnItemString = function (para) {
    return para;
};
exports.returnItemString = returnItemString;
var returnItemNumber = function (para) {
    return para;
};
exports.returnItemNumber = returnItemNumber;
function swapTuple(tupleArray) {
    return [tupleArray[1], tupleArray[0]];
}
exports.swapTuple = swapTuple;
function printArrayLength(arg) {
    console.log(arg.length);
    return arg;
}
exports.printArrayLength = printArrayLength;
function getValue(obj, key) {
    return obj[key];
}
exports.getValue = getValue;

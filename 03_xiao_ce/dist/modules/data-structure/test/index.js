"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataStructureTest = void 0;
var entries_1 = require("../entries");
var methods_1 = require("../methods");
var dataStructureTest = function () {
    console.log(methods_1.returnItem(1));
    console.log(methods_1.returnItemNumber(1));
    console.log(methods_1.returnItemString('a'));
    methods_1.swapTuple([7, 'seven']);
    methods_1.printArrayLength([1, 2, 3]);
    methods_1.printArrayLength(['a', 'bb', 'ccc', 'abcd']);
    methods_1.printArrayLength([7, 'seven']);
    var numberStack = new entries_1.NumberStack();
    numberStack.push(1);
    console.log(numberStack.pop());
    var customStack = new entries_1.CustomStack();
    customStack.push('a');
    customStack.push(2);
    customStack.push({ name: 'kjf' });
    console.log(customStack.pop());
    var numberOrStringStack = new entries_1.NumberOrStringStack();
    numberOrStringStack.push('aa');
    numberOrStringStack.push(22);
    numberOrStringStack.push(23);
    console.log(numberOrStringStack.pop());
    var obj = {
        name: 'wy',
        age: 18
    };
    console.log(methods_1.getValue(obj, 'name'));
};
exports.dataStructureTest = dataStructureTest;

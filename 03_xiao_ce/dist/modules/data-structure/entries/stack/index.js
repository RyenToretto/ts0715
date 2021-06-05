"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberOrStringStack = exports.CustomStack = exports.NumberStack = void 0;
var NumberStack = (function () {
    function NumberStack() {
        this.arr = [];
    }
    NumberStack.prototype.push = function (item) {
        this.arr.push(item);
    };
    NumberStack.prototype.pop = function () {
        return this.arr.pop();
    };
    return NumberStack;
}());
exports.NumberStack = NumberStack;
var CustomStack = (function () {
    function CustomStack() {
        this.arr = [];
    }
    CustomStack.prototype.push = function (item) {
        this.arr.push(item);
    };
    CustomStack.prototype.pop = function () {
        return this.arr.pop();
    };
    return CustomStack;
}());
exports.CustomStack = CustomStack;
var NumberOrStringStack = (function () {
    function NumberOrStringStack() {
        this.arr = [];
    }
    NumberOrStringStack.prototype.push = function (item) {
        this.arr.push(item);
    };
    NumberOrStringStack.prototype.pop = function () {
        return this.arr.pop();
    };
    return NumberOrStringStack;
}());
exports.NumberOrStringStack = NumberOrStringStack;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloClass = void 0;
var tslib_1 = require("tslib");
require("reflect-metadata");
var HelloClass = (function () {
    function HelloClass() {
        this.name = 'hello';
    }
    HelloClass.prototype.hello = function () {
        return this.name + ", world~";
    };
    tslib_1.__decorate([
        Reflect.metadata('time', '20210607'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", String)
    ], HelloClass.prototype, "hello", null);
    HelloClass = tslib_1.__decorate([
        Reflect.metadata('name', 'kjf')
    ], HelloClass);
    return HelloClass;
}());
exports.HelloClass = HelloClass;

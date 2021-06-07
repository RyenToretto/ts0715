"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var tslib_1 = require("tslib");
var decorator_1 = require("./decorator");
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.say = function () {
        return 'instance method';
    };
    Person.run = function () {
        return 'static method';
    };
    Person.prototype.greet = function (message, name) {
        return this.name + ": " + message + " " + name;
    };
    tslib_1.__decorate([
        decorator_1.cannotWrite,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], Person.prototype, "say", null);
    tslib_1.__decorate([
        tslib_1.__param(0, decorator_1.logParameter), tslib_1.__param(1, decorator_1.logParameter),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, String]),
        tslib_1.__metadata("design:returntype", String)
    ], Person.prototype, "greet", null);
    tslib_1.__decorate([
        decorator_1.cannotWrite,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], Person, "run", null);
    Person = tslib_1.__decorate([
        decorator_1.addAge,
        tslib_1.__metadata("design:paramtypes", [String])
    ], Person);
    return Person;
}());
exports.Person = Person;

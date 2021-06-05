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
    tslib_1.__decorate([
        decorator_1.cannotWrite
    ], Person.prototype, "say", null);
    tslib_1.__decorate([
        decorator_1.cannotWrite
    ], Person, "run", null);
    Person = tslib_1.__decorate([
        decorator_1.addAge
    ], Person);
    return Person;
}());
exports.Person = Person;

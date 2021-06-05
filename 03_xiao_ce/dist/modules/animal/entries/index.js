"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Cat = exports.Animal = void 0;
var tslib_1 = require("tslib");
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        this.breath();
        console.log('前走一小步');
    };
    return Animal;
}());
exports.Animal = Animal;
var Cat = (function (_super) {
    tslib_1.__extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.breath = function () {
        console.log('hu~u~wu~');
    };
    return Cat;
}(Animal));
exports.Cat = Cat;
var Dog = (function (_super) {
    tslib_1.__extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.breath = function () {
        console.log('ha~~uh~ha~uh~');
    };
    Dog.prototype.makeSound = function () {
        this.breath();
        console.log('wang~wang~');
    };
    Dog.prototype.run = function () {
        this.breath();
        console.log('dog is running');
    };
    return Dog;
}(Animal));
exports.Dog = Dog;

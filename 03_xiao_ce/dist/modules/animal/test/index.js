"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animalTest = void 0;
var entries_1 = require("../entries");
var animalTest = function () {
    var wangCai = new entries_1.Dog();
    wangCai.move();
    wangCai.makeSound();
    wangCai.run();
};
exports.animalTest = animalTest;

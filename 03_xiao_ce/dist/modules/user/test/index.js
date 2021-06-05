"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTest = void 0;
var methods_1 = require("../methods");
var userTest = function () {
    var kjf = {
        name: 'kjf',
        isMale: true,
        age: 25,
        say: function (words) { return words; },
        eat: function (food) { console.log(food); },
        emailMap: {}
    };
    console.log(methods_1.getUserName(kjf));
    return kjf;
};
exports.userTest = userTest;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personTest = void 0;
var entries_1 = require("../entries");
var personTest = function () {
    var personK = new entries_1.Person('kjf');
    console.log(personK.age);
    var personW = new entries_1.Person('wy');
    personW.say = function () {
        return 'edit';
    };
    console.log(personW.say());
};
exports.personTest = personTest;

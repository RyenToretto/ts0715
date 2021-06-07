"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./modules/shared/helpers");
var user_1 = require("./modules/user");
var animal_1 = require("./modules/animal");
var css_direction_1 = require("./modules/css-direction");
var data_structure_1 = require("./modules/data-structure");
var person_1 = require("./modules/person");
var reflectMetaData_1 = require("./modules/reflectMetaData");
var xiaoCeTest = function () {
    function greeter(person) {
        return "Hello, " + person.name;
    }
    var theUser = user_1.userTest();
    greeter(theUser);
    animal_1.animalTest();
    css_direction_1.cssDirectionTest();
    data_structure_1.dataStructureTest();
    var x = helpers_1.mixinObject({ a: 'hello' }, { b: 42 });
    console.log(x.a, x.b);
    person_1.personTest();
    reflectMetaData_1.reflectMetaDataTest();
};
exports.default = {
    xiaoCeTest: xiaoCeTest
};

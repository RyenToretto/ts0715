"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reflectMetaDataTest = void 0;
require("reflect-metadata");
var entries_1 = require("../entries");
var decorator_1 = require("../entries/decorator");
var reflectMetaDataTest = function () {
    Reflect.getMetadata('name', entries_1.HelloClass);
    Reflect.getMetadata('time', new entries_1.HelloClass, 'hello');
    var type = Reflect.getMetadata("design:type", new entries_1.HelloClass, 'hello');
    var typeParam = Reflect.getMetadata("design:paramtypes", new entries_1.HelloClass, 'hello');
    var typeReturn = Reflect.getMetadata("design:returntype", new entries_1.HelloClass, 'hello');
    console.log(Reflect.getMetadata(decorator_1.PATH_METADATA, entries_1.Article));
    var info = decorator_1.mapRoute(new entries_1.Article());
    console.log(info);
};
exports.reflectMetaDataTest = reflectMetaDataTest;

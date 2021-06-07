"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapRoute = exports.createMappingDecorator = exports.Controller = exports.PATH_METADATA = exports.METHOD_METADATA = void 0;
var helpers_1 = require("../../shared/helpers");
exports.METHOD_METADATA = 'method';
exports.PATH_METADATA = 'path';
var Controller = function (path) {
    return function (target) {
        Reflect.defineMetadata(exports.PATH_METADATA, path, target);
    };
};
exports.Controller = Controller;
var createMappingDecorator = function (method) { return function (path) {
    return function (target, key, descriptor) {
        Reflect.defineMetadata(exports.PATH_METADATA, path, descriptor.value);
        Reflect.defineMetadata(exports.METHOD_METADATA, method, descriptor.value);
    };
}; };
exports.createMappingDecorator = createMappingDecorator;
function mapRoute(instance) {
    var prototype = Object.getPrototypeOf(instance);
    var methodsNames = Object.getOwnPropertyNames(prototype)
        .filter(function (item) { return !helpers_1.isConstructor(item) && helpers_1.isFunction(prototype[item]); });
    return methodsNames.map(function (methodName) {
        var fn = prototype[methodName];
        var route = Reflect.getMetadata(exports.PATH_METADATA, fn);
        var method = Reflect.getMetadata(exports.METHOD_METADATA, fn);
        return {
            route: route,
            method: method,
            fn: fn,
            methodName: methodName
        };
    });
}
exports.mapRoute = mapRoute;
;

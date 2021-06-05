"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixinObject = void 0;
function mixinObject(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
exports.mixinObject = mixinObject;

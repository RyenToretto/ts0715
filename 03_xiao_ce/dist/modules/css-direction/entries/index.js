"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCssDirection = void 0;
function getCssDirection(top, right, bottom, left) {
    if (right === undefined && bottom === undefined && left === undefined) {
        right = bottom = left = top;
    }
    else if (bottom === undefined && left === undefined) {
        bottom = top;
        left = right;
    }
    return {
        top: top,
        right: right,
        bottom: bottom,
        left: left
    };
}
exports.getCssDirection = getCssDirection;

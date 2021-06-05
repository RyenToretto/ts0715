"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssDirectionTest = void 0;
var entries_1 = require("../entries");
var cssDirectionTest = function () {
    entries_1.getCssDirection(10);
    entries_1.getCssDirection(20, 30);
    entries_1.getCssDirection(20, 30, 40, 50);
};
exports.cssDirectionTest = cssDirectionTest;

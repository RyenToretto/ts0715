"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
var tslib_1 = require("tslib");
require("reflect-metadata");
var decorator_1 = require("./decorator");
var Get = decorator_1.createMappingDecorator('GET');
var Post = decorator_1.createMappingDecorator('POST');
var Article = (function () {
    function Article() {
    }
    Article.prototype.someGetMethod = function () {
        return 'hello world';
    };
    Article.prototype.somePostMethod = function () { };
    tslib_1.__decorate([
        Get('/content'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], Article.prototype, "someGetMethod", null);
    tslib_1.__decorate([
        Post('/comment'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], Article.prototype, "somePostMethod", null);
    Article = tslib_1.__decorate([
        decorator_1.Controller('/article')
    ], Article);
    return Article;
}());
exports.Article = Article;

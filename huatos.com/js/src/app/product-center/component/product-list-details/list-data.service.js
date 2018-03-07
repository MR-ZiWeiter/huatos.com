var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var ListDataService = (function () {
    function ListDataService() {
        this.breadcrumb = [];
    }
    ListDataService.prototype.getBreadcrumb = function () {
        return this.breadcrumb;
    };
    ListDataService.prototype.setBreadcrumb = function (value) {
        (_a = this.breadcrumb).push.apply(_a, value);
        var _a;
    };
    ListDataService.prototype.init = function () {
        this.breadcrumb = [];
        this.listdata.title = null;
    };
    ListDataService = __decorate([
        Injectable()
    ], ListDataService);
    return ListDataService;
}());
export { ListDataService };

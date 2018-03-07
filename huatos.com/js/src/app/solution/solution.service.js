var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpInterceptorService } from './../httpUtil/HttpUtil.Service';
import { solution } from '../config/config';
var SolutionService = (function () {
    function SolutionService(httpInterceptorService) {
        this.httpInterceptorService = httpInterceptorService;
    }
    SolutionService.prototype.getSolutionsIntroductions = function (params) {
        return this.httpInterceptorService.request({
            url: solution.getSolutionsIntroductions + '?Id=' + params.id,
            method: 'GET'
        });
    };
    SolutionService.prototype.getSolutionsList = function (params) {
        return this.httpInterceptorService.request({
            url: solution.getSolutions,
            method: 'GET'
        });
    };
    SolutionService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpInterceptorService])
    ], SolutionService);
    return SolutionService;
}());
export { SolutionService };

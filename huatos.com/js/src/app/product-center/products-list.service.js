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
import { HttpInterceptorService } from '../httpUtil/HttpUtil.Service';
import { cate, introductionPdc, pdcList } from '../config/config';
var ProductsListService = (function () {
    function ProductsListService(httpInterceptorService) {
        this.httpInterceptorService = httpInterceptorService;
    }
    ProductsListService.prototype.getCateList = function () {
        return this.httpInterceptorService.request({
            url: cate.getList,
            method: 'GET'
        });
    };
    ProductsListService.prototype.getpdcList = function (params) {
        return this.httpInterceptorService.request({
            url: pdcList.getList + '?pageIndex=' + params.pageindex + '&Name=' + params.name + '&type=' + params.type + '&SmallType=' + params.smalltype + '&LargeType=' + params.largetype,
            method: 'GET'
        });
    };
    ProductsListService.prototype.getIntroductions = function (params) {
        return this.httpInterceptorService.request({
            url: introductionPdc.getIntroductions + '?Id=' + params.id,
            method: 'GET'
        });
    };
    ProductsListService.prototype.getSimilar = function (params) {
        return this.httpInterceptorService.request({
            url: introductionPdc.getSimilar + '?type=' + params.id,
            method: 'GET'
        });
    };
    ProductsListService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpInterceptorService])
    ], ProductsListService);
    return ProductsListService;
}());
export { ProductsListService };

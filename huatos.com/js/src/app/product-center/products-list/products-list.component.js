var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListDataService } from './../component/product-list-details/list-data.service';
var ProductsListComponent = (function () {
    function ProductsListComponent(_activetedRoute, _route, _ListDataService) {
        this._activetedRoute = _activetedRoute;
        this._route = _route;
        this._ListDataService = _ListDataService;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        // this._activetedRoute.data.subscribe((par) => {
        //   // this._route.navigateByUrl('/product-center/details/1');
        //   // console.log(par);
        // });
    };
    ProductsListComponent.prototype.thisTitle = function (title) {
        this.title = title;
        // console.log(title);
        this._ListDataService.listdata = { title: this.title };
    };
    ProductsListComponent = __decorate([
        Component({
            selector: 'huato-products-list',
            templateUrl: './products-list.component.html',
            styleUrls: ['./products-list.component.sass'],
            providers: [ListDataService]
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            ListDataService])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
export { ProductsListComponent };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsListService } from './../../products-list.service';
import { ListDataService } from '../product-list-details/list-data.service';
var ProductMenuComponent = (function () {
    function ProductMenuComponent(_activetedRoute, productsListService, listDataService) {
        this._activetedRoute = _activetedRoute;
        this.productsListService = productsListService;
        this.listDataService = listDataService;
        this.listTitle = new EventEmitter();
        this.getCateList();
    }
    ProductMenuComponent.prototype.ngOnInit = function () {
        this.menuListName = '产品中心';
        this.listTitle.emit(this.menuListName);
    };
    ProductMenuComponent.prototype.onbreadcrumb = function (item, childItem) {
        // 初始化数据
        this.listDataService.init();
        if (childItem === undefined) {
            this.menuListName = item.Type_Name;
            this.listTitle.emit(this.menuListName);
            item.isChildId = false;
            // console.log(item);
            this.listDataService.setBreadcrumb([item]);
            return;
        }
        else {
            item.isChildId = true;
            // console.log(item);
            this.menuListName = childItem.Type_Name;
            this.listTitle.emit(this.menuListName);
            this.listDataService.setBreadcrumb([item, childItem]);
        }
    };
    ProductMenuComponent.prototype.getCateList = function () {
        var _this = this;
        this.productsListService.getCateList()
            .then(function (response) {
            if (response.success === false) {
                return;
            }
            if (response.data.length === 0) {
                _this.getCateLists = [];
                return;
            }
            _this.getCateLists = response.data;
            if (response.data[0].subnideNode.length === 0) {
                _this.listDataService.setBreadcrumb([response.data[0]]);
                return;
            }
            else {
                _this.listDataService.setBreadcrumb([response.data[0], response.data[0].subnideNode[0]]);
            }
        })
            .catch(function (err) {
            console.log(err);
            return;
        });
    };
    ProductMenuComponent.prototype.ngOnDestroy = function () {
        // console.log('销毁实例并初始化共享数据!');
        this.listDataService.init();
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ProductMenuComponent.prototype, "listTitle", void 0);
    ProductMenuComponent = __decorate([
        Component({
            selector: 'huato-product-menu',
            templateUrl: './product-menu.component.html',
            styleUrls: ['./product-menu.component.sass']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            ProductsListService,
            ListDataService])
    ], ProductMenuComponent);
    return ProductMenuComponent;
}());
export { ProductMenuComponent };

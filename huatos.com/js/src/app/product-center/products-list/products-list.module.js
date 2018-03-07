var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './products-list.component';
import { ProductListDetailsComponent } from '../component/product-list-details/product-list-details.component';
import { ProductMenuComponent } from './../component/product-menu/product-menu.component';
import { LayoutHotlineModule } from '../../public-component/layout-hotline/layout-hotline.module.routing';
import { ListDataService } from './../component/product-list-details/list-data.service';
// import { ProductsListRoute } from './products-list.routing';
var ProductsListModule = (function () {
    function ProductsListModule() {
    }
    ProductsListModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                NgZorroAntdModule,
                FormsModule,
                LayoutHotlineModule,
                RouterModule
            ],
            exports: [ProductsListComponent],
            declarations: [
                ProductListDetailsComponent,
                ProductsListComponent,
                ProductMenuComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [ListDataService]
        })
    ], ProductsListModule);
    return ProductsListModule;
}());
export { ProductsListModule };

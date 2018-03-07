var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ProductCenterComponent } from './product-center.component';
import { productRoute } from './product-center.routing';
import { LayoutBannerModule } from '../public-component/layout-banner/layout-banner.module';
import { PdcIntroctionsModule } from './pdc-introctions/pdc-introctions.module';
import { ProductsListModule } from './products-list/products-list.module';
import { ProductsListService } from './products-list.service';
import { HttpInterceptorService } from '../httpUtil/HttpUtil.Service';
var ProductCenterModule = (function () {
    function ProductCenterModule() {
    }
    ProductCenterModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(productRoute),
                FormsModule,
                NgZorroAntdModule,
                LayoutBannerModule,
                ProductsListModule,
                PdcIntroctionsModule
            ],
            exports: [
                ProductCenterComponent,
                CommonModule,
                RouterModule
            ],
            declarations: [
                ProductCenterComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [ProductsListService, HttpInterceptorService]
        })
    ], ProductCenterModule);
    return ProductCenterModule;
}());
export { ProductCenterModule };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { BannerModule } from './banner/banner.module';
import { homeRoutes } from './home.routing';
import { ProductsListService } from './../product-center/products-list.service';
import { SolutionService } from '../solution/solution.service';
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                NgZorroAntdModule,
                BannerModule,
                FormsModule,
                RouterModule.forChild(homeRoutes)
            ],
            exports: [],
            declarations: [
                HomeComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [ProductsListService, SolutionService]
        })
    ], HomeModule);
    return HomeModule;
}());
export { HomeModule };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HomeModule } from './home/home.module';
/**
 * 系统模块&路由
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LayoutFooterModule } from './public-component/layout-footer/layout-footer.module';
// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
/**
 * 组件
 */
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { DocDownloadComponent } from './doc-download/doc-download.component';
import { AboutHuatoComponent } from './about-huato/about-huato.component';
/**
 * 其他组件
 */
/**
 * 注册服务
 */
import { HttpInterceptorService } from './httpUtil/HttpUtil.Service';
import { AppRoutingModule } from './app-routing.module';
import { ProductCenterModule } from './product-center/product-center.module';
var AppModule = (function () {
    function AppModule(router) {
        this.router = router;
        // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                DocDownloadComponent,
                AboutHuatoComponent
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                CommonModule,
                FormsModule,
                AppRoutingModule,
                HttpClientModule,
                NgZorroAntdModule.forRoot(),
                HttpModule,
                HomeModule,
                LayoutFooterModule,
                ProductCenterModule
            ],
            providers: [
                HttpInterceptorService,
                {
                    provide: LocationStrategy,
                    useClass: PathLocationStrategy
                }
            ],
            bootstrap: [AppComponent]
        }),
        __metadata("design:paramtypes", [Router])
    ], AppModule);
    return AppModule;
}());
export { AppModule };

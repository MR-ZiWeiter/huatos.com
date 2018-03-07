var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutHuatoComponent } from './about-huato/about-huato.component';
import { HomeComponent } from './home/home.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
var ɵ0 = {
    breadcrumb: '产品中心'
}, ɵ1 = {
    breadcrumb: '解决方案'
}, ɵ2 = {
    breadcrumb: '资料下载'
}, ɵ3 = {
    breadcrumb: '人才招聘'
}, ɵ4 = {
    breadcrumb: '关于华图'
};
/**
 * children加载模块 这种方式会阻碍初次加载速度
 * children: SolutionModule
 * import { SolutionModule } from './solution/solution.module';
 * import { RecruitmentModule } from './recruitment/recruitment.module';
 * 正确应该使用loadChildren方式进行懒加载模块
 * loadChildren: './solution/solution.module#SolutionModule'
 */
var appRouter = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'product-center',
        loadChildren: './product-center/product-center.module#ProductCenterModule',
        data: ɵ0
    },
    {
        path: 'solution',
        loadChildren: './solution/solution.module#SolutionModule',
        data: ɵ1
    },
    {
        path: 'download',
        loadChildren: './download/download.module#DownloadModule',
        data: ɵ2
    },
    {
        path: 'recruitment',
        loadChildren: './recruitment/recruitment.module#RecruitmentModule',
        data: ɵ3
    },
    {
        path: 'about-HUATO',
        component: AboutHuatoComponent,
        data: ɵ4
    },
    { path: '**', component: HomeComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(appRouter, {
                    enableTracing: false,
                    preloadingStrategy: SelectivePreloadingStrategy,
                })
            ],
            exports: [RouterModule],
            providers: [SelectivePreloadingStrategy]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };

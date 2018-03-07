var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutFooterComponent } from './layout-footer.component';
import { LayoutFooterService } from './layout-footer.service';
var LayoutFooterModule = (function () {
    function LayoutFooterModule() {
    }
    LayoutFooterModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                NgZorroAntdModule,
                FormsModule
            ],
            exports: [
                LayoutFooterComponent
            ],
            declarations: [
                LayoutFooterComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [LayoutFooterService]
        })
    ], LayoutFooterModule);
    return LayoutFooterModule;
}());
export { LayoutFooterModule };

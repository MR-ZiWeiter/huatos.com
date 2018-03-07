var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PdcIntroctionsComponent } from './pdc-introctions.component';
import { PdcMagnifierDirective } from './pdc-magnifier.directive';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BypassSecurityTrustHtmlPipe } from './pdc-introctions.pipe';
var PdcIntroctionsModule = (function () {
    function PdcIntroctionsModule() {
    }
    PdcIntroctionsModule = __decorate([
        NgModule({
            declarations: [
                PdcIntroctionsComponent,
                PdcMagnifierDirective,
                BypassSecurityTrustHtmlPipe
            ],
            imports: [
                NgZorroAntdModule,
                FormsModule,
                CommonModule,
                RouterModule
            ],
            exports: [
                PdcIntroctionsComponent
            ],
            providers: [],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], PdcIntroctionsModule);
    return PdcIntroctionsModule;
}());
export { PdcIntroctionsModule };

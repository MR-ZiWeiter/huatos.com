import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BannerComponent } from './banner.component';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
    imports: [
        NgZorroAntdModule,
        CommonModule
    ],
    exports: [
        BannerComponent
    ],
    providers: [],
    declarations: [
        BannerComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BannerModule { }

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PdcIntroctionsComponent } from './pdc-introctions.component';
import { PdcMagnifierDirective } from './pdc-magnifier.directive';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BypassSecurityTrustHtmlPipe } from './pdc-introctions.pipe';

@NgModule({
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
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PdcIntroctionsModule { }


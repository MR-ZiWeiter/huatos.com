import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstomArticlesComponent } from './constom-articles.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PulService } from '../../solution/pul.service';
import { BypassSecurityTrustHtmlPipe } from './constom-articles.pipe';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    ConstomArticlesComponent
  ],
  declarations: [
    ConstomArticlesComponent,
    BypassSecurityTrustHtmlPipe
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, PulService ]
})
export class ConstomArticlesModule { }

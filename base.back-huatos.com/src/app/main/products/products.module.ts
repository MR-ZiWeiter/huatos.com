import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OperatingPdcComponent } from './operating-pdc/operating-pdc.component';
import { ListPdcComponent } from './list-pdc/list-pdc.component';
import { ProductsComponent } from './products.component';
import { HttpInterceptorService } from '../../httpUtil/HttpUtil.Service';
import { CkeditorModule } from './../component/ckeditor/ckeditor.module';
import { OperatingPdcService } from './operating-pdc/operating.service';
import { PulService } from './pul.service';
import { NgxQuillModule } from './../component/ngx-quill/ngx-quill.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CkeditorModule,
    NgxQuillModule
  ],
  exports: [
    CommonModule,
    ListPdcComponent,
    OperatingPdcComponent,
    ProductsComponent
  ],
  declarations: [
      ListPdcComponent,
      OperatingPdcComponent,
      ProductsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    // HttpInterceptorService,
    OperatingPdcService,
    PulService
  ]
})
export class ProductsModule { }

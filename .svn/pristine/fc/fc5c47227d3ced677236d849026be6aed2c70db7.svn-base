import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CateComponent } from './cate.component';
import { HttpModule } from '@angular/http';
import { OperatingCateComponent } from './operating-cate/operating-cate.component';
import { ListCateComponent } from './list-cate/list-cate.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpInterceptorService } from '../../httpUtil/HttpUtil.Service';
import { OperatingCateService } from './operating-cate/operating-cate.service';
import { PulService } from './pul.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgZorroAntdModule,
    HttpModule
  ],
  declarations: [
    CateComponent,
    OperatingCateComponent,
    ListCateComponent
  ],
  exports: [ CateComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    // HttpInterceptorService,
    OperatingCateService,
    PulService ]
})
export class CateModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';

import { MainRouter } from './main.routing';
import { WelconComponent } from './welcon/welcon.component';
import { NewsModule } from './news/news.module';

import { ProductsModule } from './products/products.module';
import { CopyRightModule } from './copy-right/copy-right.module';
import { CateModule } from './cate/cate.module';
import { HttpInterceptorService } from '../httpUtil/httpUtil.Service';
import { NgxQuillModule } from './component/ngx-quill/ngx-quill.module';
import { SolutionModule } from './solution/solution.module';
import { DownloadModule } from './download/download.module';
import { RecruitmentModule } from './recruitment/recruitment.module';
import { ContsModule } from './conts/conts.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule.forChild(MainRouter),
    ProductsModule,
    CopyRightModule,
    CateModule,
    NgxQuillModule,
    SolutionModule,
    DownloadModule,
    RecruitmentModule,
    ContsModule
  ],
  exports: [
    MainComponent,
    CommonModule
  ],
  declarations: [
    MainComponent,
    WelconComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ HttpInterceptorService ]
})
export class MainModule { }

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SolutionComponent } from './solution.component';
import { ListSolutionComponent } from './list-solution/list-solution.component';
import { OperatingSolutionComponent } from './operating-solution/operating-solution.component';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from '../../httpUtil/httpUtil.Service';
import { SolutionService } from './solution.service';
import { CkeditorModule } from './../component/ckeditor/ckeditor.module';
import { PulService } from './list-solution/Pul.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CkeditorModule,
    NgZorroAntdModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    SolutionComponent,
    ListSolutionComponent,
    OperatingSolutionComponent
  ],
  declarations: [
    SolutionComponent,
    ListSolutionComponent,
    OperatingSolutionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    // HttpInterceptorService,
    SolutionService,
    PulService
  ]
})
export class SolutionModule { }

import { CkeditorModule } from './../component/ckeditor/ckeditor.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentComponent } from './recruitment.component';
import { ListRecruitmentComponent } from './list-recruitment/list-recruitment.component';
import { OperatingRecruitmentComponent } from './operating-recruitment/operating-recruitment.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RecruitmentService } from './recruitment.service';
import { RePulService } from './recruitmentpul.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    CkeditorModule
  ],
  exports: [ RecruitmentComponent ],
  declarations: [RecruitmentComponent, ListRecruitmentComponent, OperatingRecruitmentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ RecruitmentService, RePulService ]
})
export class RecruitmentModule { }

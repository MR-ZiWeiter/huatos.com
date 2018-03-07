import { CkeditorModule } from './../component/ckeditor/ckeditor.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { DownListComponent } from './down-list/down-list.component';
import { OperatingDownComponent } from './operating-down/operating-down.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TypeListComponent } from './type-list/type-list.component';
import { OperatingTypeComponent } from './operating-type/operating-type.component';
import { DownloadService } from './download.service';
import { PulService } from './pul.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    CkeditorModule
  ],
  exports: [DownloadComponent ],
  declarations: [DownloadComponent, DownListComponent, OperatingDownComponent, TypeListComponent, OperatingTypeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DownloadService, PulService]
})
export class DownloadModule { }

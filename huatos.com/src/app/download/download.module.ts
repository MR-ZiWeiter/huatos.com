import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/**
 * 导入依赖
 */
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LayoutHotlineModule } from '../public-component/layout-hotline/layout-hotline.module.routing';

import { DownloadComponent } from './download.component';
import { DownloadDetailsComponent } from './download-details/download-details.component';
import { downloadRouting } from './download.routing';
import { PulService } from './pul.service';
import { DownloadService } from './download.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(downloadRouting),
    FormsModule,
    NgZorroAntdModule,
    LayoutHotlineModule
  ],
  exports: [
    DownloadComponent
  ],
  declarations: [
    DownloadComponent,
    DownloadDetailsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [DownloadService, PulService]
})
export class DownloadModule { }

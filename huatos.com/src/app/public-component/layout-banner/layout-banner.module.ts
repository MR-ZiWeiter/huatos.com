import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { LayoutBannerComponent } from './layout-banner.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    LayoutBannerComponent
  ],
  declarations: [
    LayoutBannerComponent
  ]
})
export class LayoutBannerModule { }

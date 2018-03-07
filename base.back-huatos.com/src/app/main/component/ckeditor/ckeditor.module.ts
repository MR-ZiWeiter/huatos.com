import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CkeditorComponent } from './ckeditor.component';
import { CKEditorModule } from 'ng2-ckeditor';

import { NzMessageService, NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CkeditorComponent,
    CommonModule
  ],
  declarations: [
    CkeditorComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [NzMessageService]
})
export class CkeditorModule { }

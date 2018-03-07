import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContsComponent } from './conts.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ContsListComponent } from './conts-list/conts-list.component';
import { FormsModule } from '@angular/forms';
import { ContsListService } from './conts-list/conts-list.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgZorroAntdModule
  ],
  exports: [ ContsComponent ],
  declarations: [ContsComponent, ContsListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ ContsListService ]
})
export class ContsModule { }

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoute } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    RouterModule.forChild(LoginRoute),
    ReactiveFormsModule
  ],
  exports: [ LoginComponent ],
  declarations: [
    LoginComponent
  ],
  providers: []
})
export class LoginModule { }

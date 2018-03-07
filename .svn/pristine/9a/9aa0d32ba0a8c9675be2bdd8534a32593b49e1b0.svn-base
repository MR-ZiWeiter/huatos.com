import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { BannerModule } from './banner/banner.module';
import { homeRoutes } from './home.routing';
import { ProductsListService } from './../product-center/products-list.service';
import { SolutionService } from '../solution/solution.service';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    BannerModule,
    FormsModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [],
  declarations: [
    HomeComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ ProductsListService, SolutionService ]
})
export class HomeModule { }

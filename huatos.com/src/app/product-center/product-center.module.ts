import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ProductCenterComponent } from './product-center.component';

import { productRoute } from './product-center.routing';
import { LayoutBannerModule } from '../public-component/layout-banner/layout-banner.module';
import { PdcIntroctionsModule } from './pdc-introctions/pdc-introctions.module';
import { PdcIntroctionsComponent } from './pdc-introctions/pdc-introctions.component';

import { ProductsListModule } from './products-list/products-list.module';
import { ProductsListService } from './products-list.service';
import { HttpInterceptorService } from '../httpUtil/HttpUtil.Service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoute),
    FormsModule,
    NgZorroAntdModule,
    LayoutBannerModule,
    ProductsListModule,
    PdcIntroctionsModule
  ],
  exports: [
    ProductCenterComponent,
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProductCenterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ ProductsListService, HttpInterceptorService ]
})

export class ProductCenterModule {  }

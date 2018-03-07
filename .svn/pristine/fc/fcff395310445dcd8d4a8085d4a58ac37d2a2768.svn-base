import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsListComponent } from './products-list.component';
import { ProductListDetailsComponent } from '../component/product-list-details/product-list-details.component';
import { ProductMenuComponent } from './../component/product-menu/product-menu.component';
import { LayoutHotlineModule } from '../../public-component/layout-hotline/layout-hotline.module.routing';
import { ListDataService } from './../component/product-list-details/list-data.service';
// import { ProductsListRoute } from './products-list.routing';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    LayoutHotlineModule,
    RouterModule
  ],
  exports: [ ProductsListComponent ],
  declarations: [
    ProductListDetailsComponent,
    ProductsListComponent,
    ProductMenuComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ ListDataService ]
})
export class ProductsListModule { }

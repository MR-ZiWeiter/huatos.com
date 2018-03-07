import { HomeModule } from './home/home.module';
/**
 * 系统模块&路由
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LayoutFooterModule } from './public-component/layout-footer/layout-footer.module';
// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
/**
 * 组件
 */
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductCenterComponent } from './product-center/product-center.component';
import { DocDownloadComponent } from './doc-download/doc-download.component';
import { AboutHuatoComponent } from './about-huato/about-huato.component';
import { LayoutFooterComponent } from './public-component/layout-footer/layout-footer.component';
/**
 * 其他组件
 */
/**
 * 注册服务
 */
import { HttpInterceptorService } from './httpUtil/HttpUtil.Service';
import { AppRoutingModule } from './app-routing.module';

import { ProductCenterModule } from './product-center/product-center.module';
import { SerachComponent } from './serach/serach.component';
@NgModule({
  declarations: [
    AppComponent,
    DocDownloadComponent,
    SerachComponent,
    AboutHuatoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    HttpModule,
    HomeModule,
    LayoutFooterModule,
    ProductCenterModule
  ],
  providers: [
    HttpInterceptorService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (private router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

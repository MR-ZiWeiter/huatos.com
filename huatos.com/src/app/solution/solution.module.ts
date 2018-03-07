import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/**
 * 导入依赖
 */
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * 导入路由 (子)
 */
import { solutionsRouting } from './solution.routing';
/**
 * 组件（自定义）
 */
import { SolutionComponent } from './solution.component';
import { SolutionDetailsComponent } from './solution-details/solution-details.component';
import { LayoutHotlineModule } from '../public-component/layout-hotline/layout-hotline.module.routing';
import { ConstomArticlesModule } from '../public-component/constom-articles/constom-articles.module';
import { SolutionService } from './solution.service';
import { PulService } from './pul.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(solutionsRouting),
    FormsModule,
    NgZorroAntdModule,
    LayoutHotlineModule,
    ConstomArticlesModule
  ],
  exports: [
    SolutionComponent
  ],
  declarations: [
    SolutionComponent,
    SolutionDetailsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [SolutionService, PulService]
})
export class SolutionModule { }

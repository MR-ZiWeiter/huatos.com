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
import { recruitmentRoute } from './recruitment.routing';
/**
 * 组件（自定义）
 */
import { RecruitmentComponent } from './recruitment.component';
import { RecruitmentDetailsComponent } from './component/recruitment-details/recruitment-details.component';
import { LayoutHotlineModule } from '../public-component/layout-hotline/layout-hotline.module.routing';
import { RecruitmentService } from './recruitment.service';
/**
 * 过滤pipe
 */
import { BypassSecurityTrustHtmlPipe } from './recruitment.pipe';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(recruitmentRoute),
        FormsModule,
        NgZorroAntdModule,
        LayoutHotlineModule
    ],
    exports: [
        RecruitmentComponent
    ],
    declarations: [
        RecruitmentComponent,
        RecruitmentDetailsComponent,
        BypassSecurityTrustHtmlPipe
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers: [ RecruitmentService ]
})
export class RecruitmentModule { }

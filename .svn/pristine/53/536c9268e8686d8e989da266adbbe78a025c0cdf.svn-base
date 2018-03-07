import { RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { HttpModule } from '@angular/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { CkeditorModule } from '../component/ckeditor/ckeditor.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { OperatingNewsComponent } from './operating-news/operating-news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsRoute } from './news.routing';
@NgModule({
    providers: [],
    exports: [
        NewsComponent,
        OperatingNewsComponent,
        NewsListComponent
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        CKEditorModule,
        CkeditorModule,
        RouterModule.forChild(NewsRoute),
        HttpModule
    ],
    declarations: [
        NewsComponent,
        OperatingNewsComponent,
        NewsListComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class NewsModule {}

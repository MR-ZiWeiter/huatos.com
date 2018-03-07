import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutHuatoComponent } from './about-huato/about-huato.component';
import { DocDownloadComponent } from './doc-download/doc-download.component';
import { HomeComponent } from './home/home.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { SerachComponent } from './serach/serach.component';
/**
 * children加载模块 这种方式会阻碍初次加载速度
 * children: SolutionModule
 * import { SolutionModule } from './solution/solution.module';
 * import { RecruitmentModule } from './recruitment/recruitment.module';
 * 正确应该使用loadChildren方式进行懒加载模块
 * loadChildren: './solution/solution.module#SolutionModule'
 */
const appRouter: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'serach', component: SerachComponent, outlet: 'popup' },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'product-center',
        loadChildren: './product-center/product-center.module#ProductCenterModule',
        data: {
            breadcrumb: '产品中心'
        }
      },
    {
        path: 'solution',
        loadChildren: './solution/solution.module#SolutionModule',
        data: {
            breadcrumb: '解决方案'
        }
    },
    {
        path: 'download',
        loadChildren: './download/download.module#DownloadModule',
        data: {
            breadcrumb: '资料下载'
        }
    },
    {
        path: 'recruitment',
        loadChildren: './recruitment/recruitment.module#RecruitmentModule',
        data: {
            breadcrumb: '人才招聘'
        }
    },
    {
        path: 'about-HUATO',
        component: AboutHuatoComponent,
        data: {
            breadcrumb: '关于华图'
        }
    },
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRouter,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [RouterModule],
  providers: [SelectivePreloadingStrategy]
})

export class AppRoutingModule { }

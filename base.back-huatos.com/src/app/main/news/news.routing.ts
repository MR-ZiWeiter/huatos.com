import { AuthGuard } from './../../auth/auth.guard';
import { NewsComponent } from './news.component';
import { OperatingNewsComponent } from './operating-news/operating-news.component';
import { NewsListComponent } from './news-list/news-list.component';
export const NewsRoute = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: '',
        redirectTo: 'NewsList',
        pathMatch: 'prefix'
      },
      {
        path: 'OperatingNews',
        component: OperatingNewsComponent,
        canActivate: [ AuthGuard ],
        data: {
            breadcrumb: '编辑新闻'
        }
      },
      {
        path: 'NewsList',
        component: NewsListComponent,
        canActivate: [ AuthGuard ],
        data: {
            breadcrumb: '新闻列表'
        }
      }
    ]
  }
];

import { DownloadComponent } from './download.component';
import { Routes } from '@angular/router';
import { DownloadDetailsComponent } from './download-details/download-details.component';
export const downloadRouting: Routes = [
    {
        path: '',
        component: DownloadComponent,
        children: [
            {
                path: '',
                redirectTo: 'details/1',
                pathMatch: 'prefix'
            },
            {
                path: 'details/:id',
                component: DownloadDetailsComponent,
                children: [
                    {
                        path: '',
                        redirectTo: '1',
                        pathMatch: 'prefix',
                        data: {
                            breadcrumb: '资料下载'
                        }
                    }
                ]
            },
            {
                path: 'details',
                redirectTo: 'details/1',
                pathMatch: 'prefix'
            }
        ]
    }
];

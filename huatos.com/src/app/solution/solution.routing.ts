import { Routes } from '@angular/router';
import { SolutionComponent } from './solution.component';
import { SolutionDetailsComponent } from './solution-details/solution-details.component';
export const solutionsRouting: Routes = [
    {
        path: '',
        component: SolutionComponent,
        children: [
            {
                path: '',
                redirectTo: 'details/1',
                pathMatch: 'prefix'
            },
            {
                path: 'details/:id',
                component: SolutionDetailsComponent,
                children: [
                    {
                        path: '',
                        redirectTo: '1',
                        pathMatch: 'prefix',
                        data: {
                            breadcrumb: '解决方案'
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

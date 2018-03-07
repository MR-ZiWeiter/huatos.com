import { RecruitmentDetailsComponent } from './component/recruitment-details/recruitment-details.component';
import { RecruitmentComponent } from './recruitment.component';
export const recruitmentRoute = [
    {
        path: '',
        component: RecruitmentComponent,
        children: [
            {
                path: '',
                redirectTo: 'details/1',
                pathMatch: 'prefix'
            },
            {
                path: 'details/:id',
                component: RecruitmentDetailsComponent,
                children: [
                    {
                        path: '',
                        redirectTo: '1',
                        pathMatch: 'prefix',
                        data: {
                            breadcrumb: '人才招聘'
                        }
                    }
                ]
            },
            {
                path: 'details',
                redirectTo: 'details/1',
            }
        ]
    }
];

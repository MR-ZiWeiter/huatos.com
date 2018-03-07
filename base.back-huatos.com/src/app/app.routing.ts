import { AuthGuard } from './auth/auth.guard';
export const AppRouter = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        canActivate: [ AuthGuard ],
        data: {
            breadcrumb: '登陆'
        }
    },
    {
        path: 'main',
        loadChildren: './main/main.module#MainModule',
        canActivate: [ AuthGuard ],
        data: {
            breadcrumb: '主页'
        }
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

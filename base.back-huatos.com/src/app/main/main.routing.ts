import { ContsListComponent } from './conts/conts-list/conts-list.component';
import { OperatingTypeComponent } from './download/operating-type/operating-type.component';
import { TypeListComponent } from './download/type-list/type-list.component';
import { OperatingDownComponent } from './download/operating-down/operating-down.component';
import { GroupCopyRightComponent } from './copy-right/group-copy-right/group-copy-right.component';
import { OperatingCateComponent } from './cate/operating-cate/operating-cate.component';
import { ListPdcComponent } from './products/list-pdc/list-pdc.component';
import { AuthGuard } from '../auth/auth.guard';
import { MainComponent } from './main.component';
import { WelconComponent } from './welcon/welcon.component';
import { NewsComponent } from './news/news.component';
import { OperatingPdcComponent } from './products/operating-pdc/operating-pdc.component';
import { ListCateComponent } from './cate/list-cate/list-cate.component';
import { OperatingCopyRightComponent } from './copy-right/operating-copy-right/operating-copy-right.component';
import { SolutionComponent } from './../../../../huatos.com/src/app/solution/solution.component';
import { ListSolutionComponent } from './solution/list-solution/list-solution.component';
import { OperatingSolutionComponent } from './solution/operating-solution/operating-solution.component';
import { DownListComponent } from './download/down-list/down-list.component';
import { ListRecruitmentComponent } from './recruitment/list-recruitment/list-recruitment.component';
import { OperatingRecruitmentComponent } from './recruitment/operating-recruitment/operating-recruitment.component';

export const MainRouter = [
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'welcon',
                pathMatch: 'prefix'
            },
            {
                path: 'news',
                loadChildren: './news/news.module#NewsModule',
                canActivate: [ AuthGuard ],
                data: {
                    breadcrumb: '新闻'
                }
            },
            {
                path: 'pdc',
                children: [
                    {
                        path: '',
                        redirectTo: 'listpdc',
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'listpdc',
                        component: ListPdcComponent,
                        canActivate: [ AuthGuard ],
                        data: {
                            breadcrumb: '产品列表'
                        }
                    },
                    {
                        path: 'operatingPdc',
                        component: OperatingPdcComponent,
                        canActivate: [ AuthGuard ],
                        data: {
                            breadcrumb: '编辑产品'
                        }
                    }
                ],
                data: {
                    breadcrumb: '产品'
                }
            },
            {
                path: 'cate',
                children: [
                    {
                        path: '',
                        redirectTo: 'listcate',
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'listcate',
                        component: ListCateComponent,
                        canActivate: [ AuthGuard ],
                        data: {
                            breadcrumb: '分类列表'
                        }
                    },
                    {
                        path: 'operatingCate',
                        component: OperatingCateComponent,
                        canActivate: [ AuthGuard ],
                        data: {
                            breadcrumb: '编辑分类'
                        }
                    }
                ],
                data: {
                    breadcrumb: '分类'
                }
            },
            {
                path: 'copyright',
                children: [
                    {
                        path: '',
                        redirectTo: 'groupcopy',
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'groupcopy',
                        component: GroupCopyRightComponent,
                        canActivate: [ AuthGuard ],
                        data: {
                            breadcrumb: '更多'
                        }
                    },
                    {
                        path: 'operatingCopy',
                        component: OperatingCopyRightComponent,
                        canActivate: [ AuthGuard ],
                        data: {
                            breadcrumb: '公司信息'
                        }
                    }
                ],
                data: {
                    breadcrumb: '关于'
                }
            },
            {
                path: 'welcon',
                component: WelconComponent,
                canActivate: [ AuthGuard ],
                data: {
                    breadcrumb: '关于'
                }
            },
            {
                path: 'solution',
                data: {
                    breadcrumb: '解决方案'
                },
                children: [
                    {
                        path: 'listSolution',
                        component: ListSolutionComponent,
                        data: {
                            breadcrumb: '所有方案'
                        }
                    },
                    {
                        path: 'editSolution',
                        component: OperatingSolutionComponent,
                        data: {
                            breadcrumb: '编辑方案'
                        }
                    }
                ]
            },
            {
                path: 'recruitment',
                data: {
                    breadcrumb: '人才招聘'
                },
                children: [
                    {
                        path: 'listRecruitment',
                        component: ListRecruitmentComponent,
                        data: {
                            breadcrumb: '所有信息'
                        }
                    },
                    {
                        path: 'editRecruitment',
                        component: OperatingRecruitmentComponent,
                        data: {
                            breadcrumb: '编辑招聘'
                        }
                    }
                ]
            },
            {
                path: 'conts',
                data: {
                    breadcrumb: '留言管理'
                },
                children: [
                    {
                        path: 'contslist',
                        component: ContsListComponent,
                        data: {
                            breadcrumb: '所有信息'
                        }
                    }
                ]
            },
            {
                path: 'download',
                data: {
                    breadcrumb: '资料下载'
                },
                children: [
                    {
                        path: 'downlist',
                        component: DownListComponent,
                        data: {
                            breadcrumb: '资料列表'
                        }
                    },
                    {
                        path: 'editordown',
                        component: OperatingDownComponent,
                        data: {
                            breadcrumb: '编辑资料'
                        }
                    },
                    {
                        path: 'typelist',
                        component: TypeListComponent,
                        data: {
                            breadcrumb: '资料分类管理'
                        }
                    },
                    {
                        path: 'editTypeList',
                        component: OperatingTypeComponent,
                        data: {
                            breadcrumb: '编辑资料分类'
                        }
                    }
                ]
            }
        ],
        data: {
            breadcrumb: '主页'
        }
    }
];

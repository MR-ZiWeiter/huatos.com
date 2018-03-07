import { ProductCenterComponent } from './product-center.component';
import { PdcIntroctionsComponent } from './pdc-introctions/pdc-introctions.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductListDetailsComponent } from './component/product-list-details/product-list-details.component';
/*
* @loadChildren: './products-list/products-list.module#ProductsListModule'
* @这种方式无法自动跳转到子一级路由去
*/
export var productRoute = [
    {
        path: '',
        component: ProductCenterComponent,
        children: [
            {
                path: '',
                redirectTo: 'pdcList',
                pathMatch: 'prefix'
            },
            {
                path: 'pdcList',
                component: ProductsListComponent,
                data: {
                    breadcrumb: '产品列表'
                },
                children: [
                    {
                        path: '',
                        children: [
                            {
                                path: 'type/:id',
                                component: ProductListDetailsComponent,
                                children: [
                                    {
                                        path: '',
                                        redirectTo: '11',
                                        pathMatch: 'prefix'
                                    }
                                ]
                            },
                            {
                                path: '',
                                redirectTo: 'type/1',
                                pathMatch: 'prefix'
                            }
                        ]
                    }
                ]
            },
            {
                path: 'pbcDetails/:id',
                component: PdcIntroctionsComponent,
                children: [
                    {
                        path: '',
                        redirectTo: '1',
                        pathMatch: 'prefix'
                    }
                ]
            },
            {
                path: 'pbcDetails',
                redirectTo: 'pbcDetails/1',
                pathMatch: 'prefix'
            }
        ]
    }
];

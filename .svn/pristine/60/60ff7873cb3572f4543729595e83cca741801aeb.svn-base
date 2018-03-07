import { ProductsListComponent } from './products-list.component';
import { ProductListDetailsComponent } from '../component/product-list-details/product-list-details.component';
import { Routes } from '@angular/router';
/**
 * @ProductsListRoute 不知道怎么回事 使用loadChildren 加载子集路由失败 只能在父级使用children方法加载功能模块切换
 * @可能原因 1: 不支持此种方式
 * @可能原因 2：由于是模块关系，路由识别不了更深层次的切换（可以直接输入导航栏使用，但是却查找不到他下一级的path路径，从而读取数据失败）
 * @可能原因 3：待查
 */
export const ProductsListRoute: Routes = [
    {
        path: '',
        component: ProductsListComponent,
        data: {
            breadcrumb: '产品列表'
        },
        children: [
            {
                path: '',
                redirectTo: 'type/1',
                pathMatch: 'prefix'
            },
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
                path: 'type',
                redirectTo: 'type/1',
                pathMatch: 'prefix'
            }
        ]
    }
];

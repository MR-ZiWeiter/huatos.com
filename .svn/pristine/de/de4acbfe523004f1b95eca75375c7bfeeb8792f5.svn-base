import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { ListDataService } from './list-data.service';
import { ProductsListService } from './../../products-list.service';
import 'rxjs/add/operator/filter';
import { IBreadcrumb, Breadcrumb } from './list.interface';

@Component({
  selector: 'huato-product-list-details',
  templateUrl: './product-list-details.component.html',
  styleUrls: ['./product-list-details.component.sass']
})
export class ProductListDetailsComponent implements OnInit, OnDestroy {
  /**
   * @value 作为刷新list数据的根本  通过id值去获取数据 同时获取导航数据 即：bindBreadcrumb
   */
  set contack_id(value){
    // 初始化数据
    this._params = {
      pageindex: 1
    };
    if (value === null || value === undefined) { return; }
    if (!this.isFirst) { this.getPdcList(this._params); return; }
    this.bindBreadcrumb = this._ListDataService.getBreadcrumb();
    // console.log(this.bindBreadcrumb[0]);
    if (this.bindBreadcrumb[0].isChildId) {
      this._params.smalltype = value;
    } else {
      this._params.largetype = value;
    }
    this.getPdcList(this._params);
    // 初始化分页数据
    this._params.pageindex = 1;
  }
  private isFirst: boolean;
  public _isSpinning: boolean|any = true;
  public breadcrumbs: IBreadcrumb[];

  public showActionBtn: boolean;

  public showControlBtn: boolean;
  public bindBreadcrumb: Breadcrumb[]|any = [];
  public _params: any = {
    pageindex: 1
  };
  pdcList = {
    pagetotal: 0
  };
  get pageIndex() {
    return this._params.pageindex;
  }
  set pageIndex(value) {
    this._params.pageindex = value;
    this.getPdcList(this._params);
  }
  pdcListItem: any[] = [];
  bodyStyle = { padding: 0 };
  constructor(
    private _activetedRoute: ActivatedRoute,
    public _ListDataService: ListDataService,
    private productsListService: ProductsListService,
    private router: Router
  ) {
    this.breadcrumbs = [];
    // console.log(this._ListDataService);
  }
  /**
   * 获取产品list
   * @param params 获取产品列表的参数
   */
  getPdcList(params: object) {
    this.productsListService.getpdcList(params)
    .then(response => {
      this._isSpinning = false;
      if (response.success === false) { return; }
      if (response.data.length === 0) { this.pdcListItem = []; return; }
      this.pdcListItem = response.data;
      this.isFirst = true;
      this.pdcListItem.forEach((value, index) => {
        if (value.Product_Img.length === 0) { return; }
        let arr = new Array();
        arr = value.Product_Img.split(',');
        this.pdcListItem[index].Product_Img = arr[0];
      });
      if (this.pdcListItem.length !== 0) {
        // 获取分页数据
        this.pdcList.pagetotal = this.pdcListItem[0].Count;
      } else {
        // 初始化分页数据
        this.pdcList.pagetotal = 0;
        this._params.pageindex = 1;
      }
    })
    .catch(err => {
      console.log(err);
      return;
    });
  }
  /**
   * 初始化数据并获取导航数据[list] 并未使用
   */
  ngOnInit() {
    /**
     * 快照的方式只能得到第一次进入时的id值
     * @this._activetedRoute.snapshot.params['id']
     * this.contack_id = this._activetedRoute.snapshot.params['id'];
     */
    this._activetedRoute.params.subscribe((params: Params) => {
      this.contack_id = params['id'];
    });
    /**
     * 获取面包屑所有参数
     */
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';
    // subscribe to the NavigationEnd event
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {

      // set breadcrumbs
      const root: ActivatedRoute = this._activetedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);

      // remove duplicate element by label
      // 这个数组对象去重的方法很给力
      this.breadcrumbs = this.breadcrumbs.reduce((x, y) => x.findIndex(e => e.label === y.label) < 0 ? [...x, y] : x, []);

      // console.log('%c breadcrumb list ：', 'background: #222; color: white');
      // console.log(this.breadcrumbs);
    });
  }
  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    // get the child routes
    const children: ActivatedRoute[] = route.children;


    // return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    // iterate over each children
    for (const child of children) {
      // verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      // verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // get the route's URL segment
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      // append route URL to URL
      url += `/${routeURL}`;


      /*console.log('%c url：', 'background: #222; color: red');
      console.log(url);*/

      // add breadcrumb
      const breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url   // 这个visualization是根据自己的跳转路由加的，不然点面包屑死活不跳呀
      };
      /*console.log('%c single breadcrumb：', 'background: #222; color: red');
      console.log(breadcrumb);*/

      breadcrumbs.push(breadcrumb);


      // recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    // we should never get here, but just in case
    return breadcrumbs;
  }
  ngOnDestroy() {
    // console.log('销毁实例并初始化共享数据!');
    this._ListDataService.init();
  }
}

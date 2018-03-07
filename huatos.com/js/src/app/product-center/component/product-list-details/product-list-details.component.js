var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { ListDataService } from './list-data.service';
import { ProductsListService } from './../../products-list.service';
import 'rxjs/add/operator/filter';
var ProductListDetailsComponent = (function () {
    function ProductListDetailsComponent(_activetedRoute, _ListDataService, productsListService, router) {
        this._activetedRoute = _activetedRoute;
        this._ListDataService = _ListDataService;
        this.productsListService = productsListService;
        this.router = router;
        this._isSpinning = true;
        this.bindBreadcrumb = [];
        this._params = {
            pageindex: 1
        };
        this.pdcList = {
            pagetotal: 0
        };
        this.pdcListItem = [];
        this.bodyStyle = { padding: 0 };
        this.breadcrumbs = [];
        // console.log(this._ListDataService);
    }
    Object.defineProperty(ProductListDetailsComponent.prototype, "contack_id", {
        /**
         * @value 作为刷新list数据的根本  通过id值去获取数据 同时获取导航数据 即：bindBreadcrumb
         */
        set: function (value) {
            // 初始化数据
            this._params = {
                pageindex: 1
            };
            if (value === null || value === undefined) {
                return;
            }
            if (!this.isFirst) {
                this.getPdcList(this._params);
                return;
            }
            this.bindBreadcrumb = this._ListDataService.getBreadcrumb();
            // console.log(this.bindBreadcrumb[0]);
            if (this.bindBreadcrumb[0].isChildId) {
                this._params.smalltype = value;
            }
            else {
                this._params.largetype = value;
            }
            this.getPdcList(this._params);
            // 初始化分页数据
            this._params.pageindex = 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductListDetailsComponent.prototype, "pageIndex", {
        get: function () {
            return this._params.pageindex;
        },
        set: function (value) {
            this._params.pageindex = value;
            this.getPdcList(this._params);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取产品list
     * @param params 获取产品列表的参数
     */
    ProductListDetailsComponent.prototype.getPdcList = function (params) {
        var _this = this;
        this.productsListService.getpdcList(params)
            .then(function (response) {
            _this._isSpinning = false;
            if (response.success === false) {
                return;
            }
            if (response.data.length === 0) {
                _this.pdcListItem = [];
                return;
            }
            _this.pdcListItem = response.data;
            _this.isFirst = true;
            _this.pdcListItem.forEach(function (value, index) {
                if (value.Product_Img.length === 0) {
                    return;
                }
                var arr = new Array();
                arr = value.Product_Img.split(',');
                _this.pdcListItem[index].Product_Img = arr[0];
            });
            if (_this.pdcListItem.length !== 0) {
                // 获取分页数据
                _this.pdcList.pagetotal = _this.pdcListItem[0].Count;
            }
            else {
                // 初始化分页数据
                _this.pdcList.pagetotal = 0;
                _this._params.pageindex = 1;
            }
        })
            .catch(function (err) {
            console.log(err);
            return;
        });
    };
    /**
     * 初始化数据并获取导航数据[list] 并未使用
     */
    ProductListDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * 快照的方式只能得到第一次进入时的id值
         * @this._activetedRoute.snapshot.params['id']
         * this.contack_id = this._activetedRoute.snapshot.params['id'];
         */
        this._activetedRoute.params.subscribe(function (params) {
            _this.contack_id = params['id'];
        });
        /**
         * 获取面包屑所有参数
         */
        var ROUTE_DATA_BREADCRUMB = 'breadcrumb';
        // subscribe to the NavigationEnd event
        this.router.events.filter(function (event) { return event instanceof NavigationEnd; }).subscribe(function (event) {
            // set breadcrumbs
            var root = _this._activetedRoute.root;
            _this.breadcrumbs = _this.getBreadcrumbs(root);
            // remove duplicate element by label
            // 这个数组对象去重的方法很给力
            _this.breadcrumbs = _this.breadcrumbs.reduce(function (x, y) { return x.findIndex(function (e) { return e.label === y.label; }) < 0 ? x.concat([y]) : x; }, []);
            // console.log('%c breadcrumb list ：', 'background: #222; color: white');
            // console.log(this.breadcrumbs);
        });
    };
    ProductListDetailsComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var ROUTE_DATA_BREADCRUMB = 'breadcrumb';
        // get the child routes
        var children = route.children;
        // return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }
        // iterate over each children
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            // verify primary route
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }
            // verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            // get the route's URL segment
            var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join('/');
            // append route URL to URL
            url += "/" + routeURL;
            /*console.log('%c url：', 'background: #222; color: red');
            console.log(url);*/
            // add breadcrumb
            var breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url // 这个visualization是根据自己的跳转路由加的，不然点面包屑死活不跳呀
            };
            /*console.log('%c single breadcrumb：', 'background: #222; color: red');
            console.log(breadcrumb);*/
            breadcrumbs.push(breadcrumb);
            // recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
        // we should never get here, but just in case
        return breadcrumbs;
    };
    ProductListDetailsComponent.prototype.ngOnDestroy = function () {
        // console.log('销毁实例并初始化共享数据!');
        this._ListDataService.init();
    };
    ProductListDetailsComponent = __decorate([
        Component({
            selector: 'huato-product-list-details',
            templateUrl: './product-list-details.component.html',
            styleUrls: ['./product-list-details.component.sass']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            ListDataService,
            ProductsListService,
            Router])
    ], ProductListDetailsComponent);
    return ProductListDetailsComponent;
}());
export { ProductListDetailsComponent };

import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET} from '@angular/router';
import 'rxjs/add/operator/filter';
interface IBreadcrumb {
  label: string; // 用于显示的path
  params?: Params; // 跳转时所带参数
  url: string; // 跳转的url
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  public isCollapsed = true;
  public breadcrumbs: IBreadcrumb[];

  public showActionBtn: boolean;

  public showControlBtn: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.breadcrumbs = [];
  }

  ngOnInit() {

    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    // subscribe to the NavigationEnd event
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {

      // set breadcrumbs
      const root: ActivatedRoute = this.activatedRoute.root;
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
}

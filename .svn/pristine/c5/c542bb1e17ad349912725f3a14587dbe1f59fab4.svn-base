import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListDataService } from './component/product-list-details/list-data.service';
@Component({
  selector: 'huato-product-center',
  template: `
    <huato-layout-banner></huato-layout-banner>
    <router-outlet></router-outlet>
  `,
  styles: [],
  providers: [ListDataService]
})
export class ProductCenterComponent implements OnInit {
  title: string;
  constructor(
    private _activetedRoute: ActivatedRoute,
    private _route: Router,
    private _ListDataService: ListDataService
   ) { }
  ngOnInit() {
    // this._activetedRoute.data.subscribe((par) => {
    //   // this._route.navigateByUrl('/product-center/pdcList');
    //   console.log(par);
    // });
  }
  thisTitle(title: string) {
    this.title = title;
    console.log(title);
    this._ListDataService.listdata = { title: this.title };
  }
}

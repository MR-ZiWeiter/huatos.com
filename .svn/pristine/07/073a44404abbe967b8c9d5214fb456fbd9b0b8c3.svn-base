import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListDataService } from './../component/product-list-details/list-data.service';

@Component({
  selector: 'huato-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass'],
  providers: [ ListDataService ]
})
export class ProductsListComponent implements OnInit {
  title: string;
  constructor(
    private _activetedRoute: ActivatedRoute,
    private _route: Router,
    private _ListDataService: ListDataService
   ) { }
  ngOnInit() {
    // this._activetedRoute.data.subscribe((par) => {
    //   // this._route.navigateByUrl('/product-center/details/1');
    //   // console.log(par);
    // });
  }
  thisTitle(title: string) {
    this.title = title;
    // console.log(title);
    this._ListDataService.listdata = { title: this.title };
  }
}

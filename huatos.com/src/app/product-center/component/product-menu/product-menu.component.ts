import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsListService } from './../../products-list.service';
import { ListDataService } from '../product-list-details/list-data.service';

@Component({
  selector: 'huato-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.sass']
})
export class ProductMenuComponent implements OnInit, OnDestroy {
  @Output() listTitle: EventEmitter<string> = new EventEmitter();
  public menuListName: string;
  public getCateLists: any[];
  constructor(
    private _activetedRoute: ActivatedRoute,
    private productsListService: ProductsListService,
    private listDataService: ListDataService
  ) {
    this.getCateList();
  }
  ngOnInit() {
    this.menuListName = '产品中心';
    this.listTitle.emit(this.menuListName);
  }
  onbreadcrumb(item, childItem) {
    // 初始化数据
    this.listDataService.init();
    if ( childItem === undefined ) {
      this.menuListName = item.Type_Name;
      this.listTitle.emit(this.menuListName);
      item.isChildId = false;
      // console.log(item);
      this.listDataService.setBreadcrumb([item]);
      return;
    } else {
      item.isChildId = true;
      // console.log(item);
      this.menuListName = childItem.Type_Name;
      this.listTitle.emit(this.menuListName);
      this.listDataService.setBreadcrumb([item, childItem]);
    }
  }
  getCateList() {
    this.productsListService.getCateList()
    .then(response => {
      if (response.success === false) { return; }
      if (response.data.length === 0) { this.getCateLists = []; return; }
      this.getCateLists = response.data;
      if (response.data[0].subnideNode.length === 0) {
        this.listDataService.setBreadcrumb([response.data[0]]);
        return;
      } else {
        this.listDataService.setBreadcrumb([response.data[0], response.data[0].subnideNode[0]]);
      }
    })
    .catch(err => {
      console.log(err);
      return;
    });
  }
  ngOnDestroy() {
    // console.log('销毁实例并初始化共享数据!');
    this.listDataService.init();
  }
}

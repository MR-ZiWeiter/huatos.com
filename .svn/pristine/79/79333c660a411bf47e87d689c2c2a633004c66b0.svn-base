import { Component, OnInit, HostBinding, AfterViewInit } from '@angular/core';
import { slideInDownAnimation } from './serach.animations';
import { Router } from '@angular/router';
import { ProductsListService } from '../product-center/products-list.service';
import { ProductDataType } from '../model/data.of.type.modle';
import { SerachInService } from './serach.d.service';
@Component({
  selector: 'huato-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.sass'],
  animations: [ slideInDownAnimation ],
  providers: [ ProductsListService ]
})
export class SerachComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'fixed';
  public serachCare: ProductDataType[] = [];
  _isSpinning = false;
  pdcList = {
    pagetotal: 0
  };
  set pageIndex(value) {
    this.paramspdc.pageindex = value;
    this.ductInit(false);
  }
  get pageIndex() {
    return this.paramspdc.pageindex;
  }
  public paramspdc = {
    pageindex: 1,
    name: '',
    type: '',
    smalltype: '',
    largetype: ''
  };
  constructor(
    private router: Router,
    public porductListService: ProductsListService,
    private serachInStr: SerachInService
  ) {
  }
  ngOnInit() {
    this.serachInStr.change.subscribe((value: string) => {
      this.paramspdc.name = value;
    });
    this.onSearch(this.paramspdc.name);
  }
  onSearch(event: string): void {
    this.ductInit(true);
  }
  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    const body = document.getElementsByTagName('body')[0];
      body.classList.remove('active');   // remove the class
      // body.classList.add('active');   // add the class
    this.router.navigate([{ outlets: { popup: null }}]);
  }
  ductInit(isSerach: boolean): void {
    this._isSpinning = true;
    if (isSerach) { this.paramspdc.pageindex = 1; }
    this.porductListService.getpdcList(this.paramspdc)
    .then(result => {
      if (result.success === false) { return; }
      if (result.data.length === 0) { this._isSpinning = false; return; }
      result.data.forEach((value, index) => {
        if (value.Product_Img.length === 0) { return; }
        // 获取分页数据
        this.pdcList.pagetotal = result.data[0].Count;
        let arr = new Array();
        arr = value.Product_Img.split(',');
        result.data[index].Product_Img = arr[0];
      });
      this.serachCare = result.data;
      this._isSpinning = false;
    })
    .catch(err => {
      console.log(err);
    });
  }
}

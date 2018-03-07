import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PdcIntroctions } from './../../model/data.of.type.modle';
import { ProductsListService } from './../products-list.service';

@Component({
  selector: 'huato-pdc-introctions',
  templateUrl: './pdc-introctions.component.html',
  styleUrls: ['./pdc-introctions.component.sass']
})

export class PdcIntroctionsComponent implements OnInit, AfterViewInit {
  @ViewChild('rtMagnifierSg')
  rtMagnifierName: ElementRef;
  tabs = [
    {
      name: '产品特点',
      content: 1
    },
    {
      name: '性能参数',
      content: 2
    },
    {
      name: '使用范围',
      content: 3
    },
    {
      name: '资料下载',
      content: 4
    }
  ];
  _isSpinning: boolean|any = true;
  Similar = [];
  FDimgs: string;
  public pdcIntroctions: PdcIntroctions|any = {
    Product_Img: []
  };
  isIndex: number;
  isShowMagnifier: boolean;
  /**
   * 图片放大的倍数
   */
  rtMagnifierSize = 350 / 100;
  set pdcIntroctionsId(value) {
    // alert(value);
    if ( value === undefined || value === null ) { return; }
    this.closeOutlet();
    this.getPdcIntrodctions({id: value});
    // 获取相关信息
    this.getSimilar({id: value});
  }
  constructor(
    private _activetedRoute: ActivatedRoute,
    private router: Router,
    private productsListService: ProductsListService
  ) { }
  getPdcIntrodctions(params: object) {
    this.productsListService.getIntroductions(params)
    .then(response => {
      if (response.success === false) { return; }
      if (response.data === null || response.data === undefined) { this._isSpinning = false; return; }
      let arr = new Array();
      arr = response.data.Product_Img.split(',');
      response.data.Product_Img = arr;
      this.pdcIntroctions = response.data;
      // 赋值
      this.tabs[0].content = response.data.Characteristic;
      this.tabs[1].content = response.data.ProductDetails;
      this.tabs[2].content = response.data.Product_Range;
      this.tabs[3].content = response.data.Product_Data;
      this.FDimgs = response.data.Product_Img[0];
      this.isIndex = 0;
      this._isSpinning = false;
    })
    .catch(err => {
      console.log(err);
      return;
    });
  }
  closeOutlet() {
    const body = document.getElementsByTagName('body')[0];
      body.classList.remove('active');   // remove the class
    this.router.navigate([{ outlets: { popup: null }}]);
  }
  getSimilar(params) {
    this.productsListService.getSimilar(params)
    .then(response => {
      if (response.success === false) { return; }
      // console.log(response);
      if (response.data === 0) { this.Similar = []; return; }
      response.data.forEach((List, index) => {
        let arr = new Array();
        arr = List.Product_Img.split(',');
        response.data[index].Product_Img = arr;
      });
      this.Similar = response.data;
    })
    .catch(err => {
      console.log(err);
    });
  }
  magnifier(url: string, index) {
    this.FDimgs = url;
    this.isIndex = index;
  }
  ngOnInit() {
    this._activetedRoute.params.subscribe((params: Params) => {
      this.pdcIntroctionsId = params['id'];
    });
  }
  ngAfterViewInit() {
    /**
     * 设置放大倍数 && 设置放大中心
     */
    this.rtMagnifierName.nativeElement.firstElementChild.style.transform = 'scale(' + this.rtMagnifierSize + ')';
    this.rtMagnifierName.nativeElement.firstElementChild.style.transformOrigin = '0px 0px 0px';
  }
  onMagnifierChange(params) {
    this.isShowMagnifier = params.isMagnifier || false;
    this.rtMagnifierName.nativeElement.firstElementChild.style.transform = 'scale(' + this.rtMagnifierSize + ') translate(' + params.ofx + 'px,' + params.ofy + 'px)';
    const rtWidth = this.rtMagnifierName.nativeElement.firstElementChild.clientWidth + params.ofx * 2,
          rtHeight = this.rtMagnifierName.nativeElement.firstElementChild.clientHeight + params.ofy * 2;
    this.rtMagnifierName.nativeElement.firstElementChild.style.transform = 'scale(' + this.rtMagnifierSize + ') translate(' + (-rtWidth * params.x / params.sx) + 'px,' + (-rtHeight * params.y / params.sy) + 'px)';
  }
}

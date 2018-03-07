import { Component, OnInit } from '@angular/core';
import { ProductDataType } from '../model/data.of.type.modle';
import { ProductsListService } from '../product-center/products-list.service';
import { SolutionService } from './../solution/solution.service';
@Component({
  selector: 'huato-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [ ProductsListService ]
})
export class HomeComponent implements OnInit {
  public page: number;
  public limit: number;
  public name: string;
  public homeCare: ProductDataType[] = [];
  public programList = [];
  private paramspdc = {
    pageindex: 1,
    name: '',
    type: 1,
    smalltype: '',
    largetype: ''
  };
  constructor(
    public porductListService: ProductsListService,
    public solutionService: SolutionService
  ) { }

  ngOnInit() {
    /** 定义homeproductlist参数 **/
    // this.page = 1;
    // this.limit = 4;
    /** programlist 模拟数据 **/
    this.getSolutions();
    // this.programList = [ 1 , 2 , 3 , 4 , 5 , 6 ];
    /** 获取初始化数据 **/
    this.ductInit();
  }
  getSolutions() {
    this.solutionService.getSolutionsList()
    .then(response => {
      if (response.success === false) { return; }
      // console.log(response);
      this.programList = response.data;
    })
    .catch(err => {
      console.log(err);
    });
  }
  ductInit() {
    this.porductListService.getpdcList(this.paramspdc)
    .then(result => {
      if (result.success === false) { return; }
      if (result.data.length === 0) { return; }
      result.data.forEach((value, index) => {
        if (value.Product_Img.length === 0) { return; }
        let arr = new Array();
        arr = value.Product_Img.split(',');
        result.data[index].Product_Img = arr[0];
      });
      this.homeCare = result.data;
    })
    .catch(err => {
      console.log(err);
    });
  }
}

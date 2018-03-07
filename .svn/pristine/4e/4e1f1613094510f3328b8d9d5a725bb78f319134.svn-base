import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../httpUtil/HttpUtil.Service';
import { cate, introductionPdc, pdcList } from '../config/config';

@Injectable()
export class ProductsListService {
  constructor (
    private httpInterceptorService: HttpInterceptorService
  ) {}
  getCateList() {
    return this.httpInterceptorService.request({
      url: cate.getList,
      method: 'GET'
    });
  }
  getpdcList(params: object|any) {
    return this.httpInterceptorService.request({
      url: pdcList.getList + '?pageIndex=' + params.pageindex + '&Name=' + params.name + '&type=' + params.type + '&SmallType=' + params.smalltype + '&LargeType=' + params.largetype,
      method: 'GET'
    });
  }
  getIntroductions(params: object|any) {
    return this.httpInterceptorService.request({
      url: introductionPdc.getIntroductions + '?Id=' + params.id,
      method: 'GET'
    });
  }
  getSimilar(params: object|any) {
    return this.httpInterceptorService.request({
      url: introductionPdc.getSimilar + '?type=' + params.id,
      method: 'GET'
    });
  }
}

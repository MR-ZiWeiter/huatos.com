import { Injectable } from '@angular/core';
import { HttpInterceptorService } from './../../../httpUtil/httpUtil.Service';
import { product } from './../../../config/config';

@Injectable()
export class OperatingPdcService {
  constructor(private httpInterceptorService: HttpInterceptorService) {}
  postOperatingPdc(params: object|any) {
    return this.httpInterceptorService.request({
      url: product.addproducts,
      method: 'POST',
      data: params
    });
  }
  getOperatingPdcList(params: object|any) {
    return this.httpInterceptorService.request({
      url: product.getpdcList + '?pageIndex=' + params.pageindex + '&Name=' + params.name + '&type=' + params.type + '&SmallType=' + params.smalltype + '&LargeType=' + params.largetype,
      method: 'GET'
    });
  }
  getOperatingIntroductions(params: object|any) {
    return this.httpInterceptorService.request({
      url: product.getintroductions + '?Id=' + params.id,
      method: 'GET'
    });
  }
  updataproducts(params: object|any) {
    return this.httpInterceptorService.request({
      url: product.upproducts,
      method: 'POST',
      data: params
    });
  }
  deletePdc(params: object|any) {
    return this.httpInterceptorService.request({
      url: product.deletepdc + '?Product_ID=' + params.Product_ID,
      method: 'GET'
    });
  }
}

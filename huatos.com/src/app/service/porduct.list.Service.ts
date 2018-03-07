
/**
 * name: 产品列表
 * describe: 产品列表查询
 */
import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../httpUtil/HttpUtil.Service';
import { localURL } from './../config/config';
@Injectable()

export class PorductListService {
  constructor( private httpInterceptorService: HttpInterceptorService ) {}
  /**
   * 查询功能
   * @param params
   * return {Promise<{}>}
   */
  getProductList(page: number, limit: number) {
    console.log(page, limit);
    return this.httpInterceptorService.request({
      method: 'GET',
      url: localURL + '/products?page=' + page + '&limit=' + limit
    });
  }
  getPlist(page: number, name: string) {
    return this.httpInterceptorService.request({
      method: 'GET',
      url: localURL + '/ProductAll/GetProductAll?pageIndex=' + page + '&Name=' + name
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpInterceptorService } from './../httpUtil/HttpUtil.Service';
import { solution } from '../config/config';
@Injectable()
export class SolutionService {
  constructor(
    private httpInterceptorService: HttpInterceptorService
  ) {}
  getSolutionsIntroductions (params: object|any) {
    return this.httpInterceptorService.request({
      url: solution.getSolutionsIntroductions + '?Id=' + params.id,
      method: 'GET'
    });
  }
  getSolutionsList (params?: object|any) {
    return this.httpInterceptorService.request({
      url: solution.getSolutions,
      method: 'GET'
    });
  }
}

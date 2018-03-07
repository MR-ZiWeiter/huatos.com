import { Injectable } from '@angular/core';
import { HttpInterceptorService } from './../httpUtil/HttpUtil.Service';
import { recruitment } from '../config/config';

@Injectable()
export class RecruitmentService {
  constructor(
  private httpInterceptorService: HttpInterceptorService
  ) {}
  getRecruitmentIntroductions(params: object|any) {
    return this.httpInterceptorService.request({
      url: recruitment.getRecuritmentIntrotions + '?Id=' + params.id,
      method: 'GET'
    });
  }
  getRecruitmentTypeList(params?: object|any) {
    return this.httpInterceptorService.request({
      url: recruitment.getRecuritmentTypeList,
      method: 'GET'
    });
  }
}

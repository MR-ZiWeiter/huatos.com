import { recruitment } from './../../config/config';
import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../../httpUtil/httpUtil.Service';
@Injectable()
export class RecruitmentService {
  constructor(
    private httpInterceptorService: HttpInterceptorService
  ) {}
  add_recruitment(params: object|any) {
    return this.httpInterceptorService.request({
      url: recruitment.add_recruitment,
      method: 'POST',
      data: params
    });
  }
  update_recruitment(params: object|any) {
    return this.httpInterceptorService.request({
      url: recruitment.update_recruitment,
      method: 'POST',
      data: params
    });
  }
  delete_recruitment(params: object|any) {
    return this.httpInterceptorService.request({
      url: recruitment.delete_recruitment + '?Id=' + params.personnel_ID,
      method: 'POST'
    });
  }
  get_TypeRecruitment(params?: object|any) {
    return this.httpInterceptorService.request({
      url: recruitment.recruitmentTypeList,
      method: 'GET'
    });
  }
  get_recruitment(params: object|any) {
    return this.httpInterceptorService.request({
      url: recruitment.getrecruitment + '?Id=' + params.id,
      method: 'GET'
    });
  }
}

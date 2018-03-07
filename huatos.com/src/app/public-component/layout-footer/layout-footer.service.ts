import { Injectable } from '@angular/core';
import { HttpInterceptorService } from './../../httpUtil/HttpUtil.Service';
import { contactsAll } from '../../config/config';
@Injectable()
export class LayoutFooterService {
  constructor(
    private httpInterceptorService: HttpInterceptorService
  ) {}
  addContactsAll (params: object|any) {
    console.log(params);
    return this.httpInterceptorService.request({
      url: contactsAll.addContactsAll,
      data: params,
      method: 'POST'
    });
  }
}

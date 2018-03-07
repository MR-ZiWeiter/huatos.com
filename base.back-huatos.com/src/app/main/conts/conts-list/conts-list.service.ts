import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../../../httpUtil/httpUtil.Service';
import { conts } from '../../../config/config';
@Injectable()
export class ContsListService {
  constructor(private httpInterceptorService: HttpInterceptorService) {}
  get_contsList(params?: object|any) {
    return this.httpInterceptorService.request({
      url: conts.get_contsList,
      method: 'GET'
    });
  }
  delete_conts(parmas: object|any) {
    return this.httpInterceptorService.request({
      url: conts.delete_conts + '?Contacts_ID=' + parmas.id,
      method: 'GET'
    });
  }
}

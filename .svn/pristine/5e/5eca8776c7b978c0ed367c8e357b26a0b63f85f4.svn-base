import { Injectable } from '@angular/core';
import { HttpInterceptorService } from './../../httpUtil/httpUtil.Service';
import { downLoad } from '../../config/config';
@Injectable()
export class DownloadService {
  constructor(private httpInterceptorService: HttpInterceptorService) {}
  getdataIntrodctions(params: object|any) {
    return this.httpInterceptorService.request({
      url: downLoad.getDownList + '?Id=' + params.id,
      method: 'GET'
    });
  }
  add_data(params: object|any) {
    return this.httpInterceptorService.request({
      url: downLoad.add_data,
      method: 'POST',
      data: params
    });
  }
  up_data(params: object|any) {
    return this.httpInterceptorService.request({
      url: downLoad.up_data,
      method: 'POST',
      data: params
    });
  }
  delete_data(parmas: object|any) {
    return this.httpInterceptorService.request({
      url: downLoad.delete_data + '?Id=' + parmas.id,
      method: 'POST',
      data: parmas
    });
  }
  getDataTypeList(parmas?: object|any) {
    return this.httpInterceptorService.request({
      url: downLoad.get_dataTypeList,
      method: 'GET'
    });
  }
  add_typedata(parmas: object|any) {
    return this.httpInterceptorService.request({
      url: downLoad.add_dataType,
      method: 'POST',
      data: parmas
    });
  }
  up_typedata(parmas: object|any) {
    return this.httpInterceptorService.request({
      url: downLoad.up_dataType,
      method: 'POST',
      data: parmas
    });
  }
  delete_typedata(parmas: object|any) {
    return this.httpInterceptorService.request({
      url: downLoad.delete_dataType + '?Id=' + parmas.id,
      method: 'POST',
      data: parmas
    });
  }
  getDownIntro(params: object|any) {
    return this.httpInterceptorService.request({
        url: downLoad.getDownIntro + '?Id=' + params.id,
        method: 'GET'
    });
  }
}

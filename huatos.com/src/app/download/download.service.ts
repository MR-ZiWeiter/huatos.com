import { Injectable } from '@angular/core';
import { HttpInterceptorService } from './../httpUtil/HttpUtil.Service';
import { download } from '../config/config';
@Injectable()
export class DownloadService {
  constructor(
    private httpInterceptorService: HttpInterceptorService
  ) {}
  getdownloadIntroductionList (params: object|any) {
    return this.httpInterceptorService.request({
      url: download.getDownloadList + '?Id=' + params.id,
      method: 'GET'
    });
  }
  getdownloadList (params?: object|any) {
    return this.httpInterceptorService.request({
      url: download.getDownloadCateList,
      method: 'GET'
    });
  }
}

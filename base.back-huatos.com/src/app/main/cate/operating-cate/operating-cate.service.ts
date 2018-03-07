import { Injectable } from '@angular/core';
import { HttpInterceptorService } from './../../../httpUtil/httpUtil.Service';
import { cate } from './../../../config/config';

@Injectable()
export class OperatingCateService {
    constructor(private httpInterceptorService: HttpInterceptorService) {}
    getCate() {
        return this.httpInterceptorService.request({
            url: cate.getAll,
            method: 'GET'
        });
    }
    addparent(params: object|any) {
        return this.httpInterceptorService.request({
            url: cate.addparent + '?Type_Name=' + params.Type_Name,
            method: 'POST',
            data: params
        });
    }
    addchild(params: object|any) {
        return this.httpInterceptorService.request({
            url: cate.addchild,
            method: 'POST',
            data: {
                SmallType_Name: params.Type_Name,
                Type_ID: params.Type_ID
            }
        });
    }
    updataparent(params: object|any) {
        return this.httpInterceptorService.request({
            url: cate.updataparent,
            method: 'POST',
            data: {
                Type_ID: params.Type_ID,
                Type_Name: params.Type_Name
            }
        });
    }
    updatachild(params: object|any) {
        return this.httpInterceptorService.request({
            url: cate.updatachild,
            method: 'POST',
            data: {
                Type_ID: params.Type_ID,
                SmallType_ID: params.SmallType_ID,
                SmallType_Name: params.Type_Name
            }
        });
    }
    deleteParentCate(params: object|any) {
        return this.httpInterceptorService.request({
            url: cate.deleteparent + '?Type_ID=' + params.Type_id,
            method: 'GET'
        });
    }
    deleteChildCate(params: object|any) {
        return this.httpInterceptorService.request({
            url: cate.deletechild + '?SmallType_ID=' + params.Type_id,
            method: 'GET'
        });
    }
}

import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../../httpUtil/httpUtil.Service';
import { solutions } from '../../config/config';
@Injectable()
export class SolutionService {
    constructor (
        private httpInterceptorService: HttpInterceptorService
    ) {}
    getSolutionsList(params?: object|any) {
        return this.httpInterceptorService.request({
            url: solutions.getSolutionsList,
            method: 'GET'
        });
    }
    getSolutionsIntrodctions(params: object|any) {
        return this.httpInterceptorService.request({
            url: solutions.getSolutionsIntrodctions + '?Id=' + params.id,
            method: 'GET'
        });
    }
    addSolutions(params: object|any) {
        return this.httpInterceptorService.request({
            url: solutions.addSolutions,
            method: 'POST',
            data: params
        });
    }
    deleteSolutions(params: object|any) {
        return this.httpInterceptorService.request({
            url: solutions.deleteSolutions + '?Id=' + params.Details_ID,
            method: 'POST'
        });
    }
    updataSolutions(params: object|any) {
        return this.httpInterceptorService.request({
            url: solutions.updataSolutions,
            method: 'POST',
            data: params
        });
    }
}

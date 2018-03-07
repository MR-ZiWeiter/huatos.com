var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * name:http服务
 * describe:对http请求做统一处理
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var HttpInterceptorService = (function () {
    function HttpInterceptorService(http) {
        this.http = http;
    }
    /**
     * 统一发送请求
     * @param params
     * @returns {Promise<{success: boolean, msg: string}>|Promise<R>}
     */
    HttpInterceptorService.prototype.request = function (params) {
        // POST请求（参数、返回值类型都是任意类型）
        if (params['method'] === 'post' || params['method'] === 'POST') {
            return this.post(params['url'], params['data']);
        }
        else {
            return this.get(params['url'], params['data']);
        }
    };
    /**
     * get请求
     * @param url 接口地址
     * @param params 参数
     * @returns {Promise<R>|Promise<U>}
     */
    HttpInterceptorService.prototype.get = function (url, params) {
        var _this = this;
        return this.http.get(url, { search: params })
            .toPromise()
            .then(this.handleSuccess)
            .catch(function (res) { return _this.handleError(res); });
    };
    /**
     * post请求
     * @param url 接口地址
     * @param params 参数
     * @returns {Promise<R>|Promise<U>}
     */
    HttpInterceptorService.prototype.post = function (url, params) {
        var _this = this;
        return this.http.post(url, params)
            .toPromise()
            .then(this.handleSuccess)
            .catch(function (res) { return _this.handleError(res); });
    };
    /**
     * 处理请求成功
     * @param res
     * @returns {{data: (string|null|((node:any)=>any)}}
   */
    HttpInterceptorService.prototype.handleSuccess = function (res) {
        var body = res['_body'];
        // console.log("接口返回的成功信息：" + body)
        if (body) {
            return {
                data: res.json() || {},
                code: res.json().status || {},
                message: res.json().statusText || {},
                statusText: res.statusText,
                status: res.status,
                success: true
            };
        }
        else {
            return {
                data: res.json() || {},
                code: res.json().status || {},
                message: res.json().message || {},
                statusText: res.statusText,
                status: res.status,
                success: true
            };
        }
    };
    /**
     * 处理请求错误
     * @param error
     * @returns {void|Promise<string>|Promise<T>|any}
     */
    HttpInterceptorService.prototype.handleError = function (error) {
        console.log(error);
        var msg = '请求失败';
        if (error.status === 400) {
            console.log('请求参数正确');
        }
        if (error.status === 404) {
            console.error('请检查路径是否正确');
        }
        if (error.status === 500) {
            console.error('请求的服务器错误');
        }
        console.log(error);
        return { success: false, msg: msg };
    };
    HttpInterceptorService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());
export { HttpInterceptorService };

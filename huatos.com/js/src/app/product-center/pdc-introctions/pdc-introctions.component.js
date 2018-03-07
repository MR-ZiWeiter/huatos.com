var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsListService } from './../products-list.service';
var PdcIntroctionsComponent = (function () {
    function PdcIntroctionsComponent(_activetedRoute, productsListService) {
        this._activetedRoute = _activetedRoute;
        this.productsListService = productsListService;
        this.tabs = [
            {
                name: '产品特点',
                content: 1
            },
            {
                name: '性能参数',
                content: 2
            },
            {
                name: '使用范围',
                content: 3
            },
            {
                name: '资料下载',
                content: 4
            }
        ];
        this._isSpinning = true;
        this.Similar = [];
        this.pdcIntroctions = {
            Product_Img: []
        };
        /**
         * 图片放大的倍数
         */
        this.rtMagnifierSize = 350 / 100;
    }
    PdcIntroctionsComponent.prototype.getPdcIntrodctions = function (params) {
        var _this = this;
        this.productsListService.getIntroductions(params)
            .then(function (response) {
            if (response.success === false) {
                return;
            }
            if (response.data === null || response.data === undefined) {
                _this._isSpinning = false;
                return;
            }
            var arr = new Array();
            arr = response.data.Product_Img.split(',');
            response.data.Product_Img = arr;
            _this.pdcIntroctions = response.data;
            // 赋值
            _this.tabs[0].content = response.data.Characteristic;
            _this.tabs[1].content = response.data.ProductDetails;
            _this.tabs[2].content = response.data.Product_Range;
            _this.tabs[3].content = response.data.Product_Data;
            _this.FDimgs = response.data.Product_Img[0];
            _this.isIndex = 0;
            _this._isSpinning = false;
        })
            .catch(function (err) {
            console.log(err);
            return;
        });
    };
    PdcIntroctionsComponent.prototype.getSimilar = function (params) {
        var _this = this;
        this.productsListService.getSimilar(params)
            .then(function (response) {
            if (response.success === false) {
                return;
            }
            // console.log(response);
            if (response.data === 0) {
                _this.Similar = [];
                return;
            }
            _this.Similar = response.data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    PdcIntroctionsComponent.prototype.magnifier = function (url, index) {
        this.FDimgs = url;
        this.isIndex = index;
    };
    PdcIntroctionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activetedRoute.params.subscribe(function (params) {
            _this.pdcIntroctionsId = params['id'];
        });
        this.getPdcIntrodctions({ id: this.pdcIntroctionsId });
        // 获取相关信息
        this.getSimilar({ id: this.pdcIntroctionsId });
    };
    PdcIntroctionsComponent.prototype.ngAfterViewInit = function () {
        /**
         * 设置放大倍数 && 设置放大中心
         */
        this.rtMagnifierName.nativeElement.firstElementChild.style.transform = 'scale(' + this.rtMagnifierSize + ')';
        this.rtMagnifierName.nativeElement.firstElementChild.style.transformOrigin = '0px 0px 0px';
    };
    PdcIntroctionsComponent.prototype.onMagnifierChange = function (params) {
        this.isShowMagnifier = params.isMagnifier || false;
        this.rtMagnifierName.nativeElement.firstElementChild.style.transform = 'scale(' + this.rtMagnifierSize + ') translate(' + params.ofx + 'px,' + params.ofy + 'px)';
        var rtWidth = this.rtMagnifierName.nativeElement.firstElementChild.clientWidth + params.ofx * 2, rtHeight = this.rtMagnifierName.nativeElement.firstElementChild.clientHeight + params.ofy * 2;
        this.rtMagnifierName.nativeElement.firstElementChild.style.transform = 'scale(' + this.rtMagnifierSize + ') translate(' + (-rtWidth * params.x / params.sx) + 'px,' + (-rtHeight * params.y / params.sy) + 'px)';
    };
    __decorate([
        ViewChild('rtMagnifierSg'),
        __metadata("design:type", ElementRef)
    ], PdcIntroctionsComponent.prototype, "rtMagnifierName", void 0);
    PdcIntroctionsComponent = __decorate([
        Component({
            selector: 'huato-pdc-introctions',
            templateUrl: './pdc-introctions.component.html',
            styleUrls: ['./pdc-introctions.component.sass']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            ProductsListService])
    ], PdcIntroctionsComponent);
    return PdcIntroctionsComponent;
}());
export { PdcIntroctionsComponent };

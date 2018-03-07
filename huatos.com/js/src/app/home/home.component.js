var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ProductsListService } from '../product-center/products-list.service';
import { SolutionService } from './../solution/solution.service';
var HomeComponent = (function () {
    function HomeComponent(porductListService, solutionService) {
        this.porductListService = porductListService;
        this.solutionService = solutionService;
        this.homeCare = [];
        this.programList = [];
        this.paramspdc = {
            pageindex: 1,
            name: '',
            type: 1,
            smalltype: '',
            largetype: ''
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        /** 定义homeproductlist参数 **/
        // this.page = 1;
        // this.limit = 4;
        /** programlist 模拟数据 **/
        this.getSolutions();
        // this.programList = [ 1 , 2 , 3 , 4 , 5 , 6 ];
        /** 获取初始化数据 **/
        this.ductInit();
    };
    HomeComponent.prototype.getSolutions = function () {
        var _this = this;
        this.solutionService.getSolutionsList()
            .then(function (response) {
            if (response.success === false) {
                return;
            }
            // console.log(response);
            _this.programList = response.data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.ductInit = function () {
        var _this = this;
        this.porductListService.getpdcList(this.paramspdc)
            .then(function (result) {
            if (result.success === false) {
                return;
            }
            if (result.data.length === 0) {
                return;
            }
            result.data.forEach(function (value, index) {
                if (value.Product_Img.length === 0) {
                    return;
                }
                var arr = new Array();
                arr = value.Product_Img.split(',');
                result.data[index].Product_Img = arr[0];
            });
            _this.homeCare = result.data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    HomeComponent = __decorate([
        Component({
            selector: 'huato-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.sass'],
            providers: [ProductsListService]
        }),
        __metadata("design:paramtypes", [ProductsListService,
            SolutionService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };

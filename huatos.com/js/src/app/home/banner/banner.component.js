var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var BannerComponent = (function () {
    function BannerComponent() {
        this.array = [1];
    }
    BannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function (_) {
            _this.array = [1, 2, 3, 4, 5];
        }, 500);
    };
    BannerComponent = __decorate([
        Component({
            selector: 'huato-banner',
            template: "\n    <nz-carousel nzAutoPlay>\n      <div nz-carousel-content *ngFor=\"let index of array\">\n        <img src=\"../../../assets/image/public/others/main_banner/banner{{index}}.jpg\">\n      </div>\n    </nz-carousel>",
            styles: [
                ":host ::ng-deep .ant-carousel .slick-slide {\n      text-align: center;\n      height: 430px;\n      line-height: 430px;\n      background: #364d79;\n      color: #fff;\n      overflow: hidden;\n    }\n    h3 {\n      color: #fff;\n    }\n    "
            ]
        })
    ], BannerComponent);
    return BannerComponent;
}());
export { BannerComponent };

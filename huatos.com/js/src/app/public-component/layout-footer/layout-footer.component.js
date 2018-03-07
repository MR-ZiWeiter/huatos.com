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
import { LayoutFooterService } from './layout-footer.service';
import { NzNotificationService } from 'ng-zorro-antd';
var LayoutFooterComponent = (function () {
    function LayoutFooterComponent(layoutFooterService, _notification) {
        this.layoutFooterService = layoutFooterService;
        this._notification = _notification;
        this.addcont = {};
    }
    LayoutFooterComponent.prototype.ngOnInit = function () {
    };
    LayoutFooterComponent.prototype.addConct = function () {
        'use strict';
        var _this = this;
        // console.log(this.addcont);
        if (this.addcont) { }
        this.layoutFooterService.addContactsAll(this.addcont)
            .then(function (Response) {
            // console.log(Response);
            if (Response.data === true) {
                _this.isFirst = true;
                _this._notification.create('success', '留言成功！', '我们将尽快和您联系，请保证您的通讯设备正常！谢谢！（请不要多次提交，谢谢合作！）');
            }
            else {
                _this._notification.create('warning', '提示', '请完整填写留言内容！');
            }
        })
            .catch(function (err) {
            // console.log(err);
        });
    };
    LayoutFooterComponent = __decorate([
        Component({
            selector: 'huato-layout-footer',
            templateUrl: './layout-footer.component.html',
            styleUrls: ['./layout-footer.component.sass'],
            providers: [NzNotificationService]
        }),
        __metadata("design:paramtypes", [LayoutFooterService,
            NzNotificationService])
    ], LayoutFooterComponent);
    return LayoutFooterComponent;
}());
export { LayoutFooterComponent };

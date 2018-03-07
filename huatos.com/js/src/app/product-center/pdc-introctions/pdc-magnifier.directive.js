var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
var PdcMagnifierDirective = (function () {
    function PdcMagnifierDirective(el) {
        this.el = el;
        // @Input () defaultMagnifierImg;
        // @Input ('huatoMagnifierImg') MagnifierImg: string;
        this.MagnifierOptions = new EventEmitter();
        this.maskEvent = {
            maskWidth: 0,
            maskHeight: 0,
            EventX: 0,
            EventY: 0,
            ElementMask: null
        };
        this.smallBox = {
            offsetTop: null,
            offsetLeft: null,
            boxWidth: null,
            boxHeight: null
        };
    }
    /**
     * 放大镜事件
     * @argument
     */
    PdcMagnifierDirective.prototype.onMouseEnter = function (para) {
        var e = para || window.event;
        this.maskEvent.ElementMask = this.el.nativeElement.firstElementChild;
        this.smallBox.offsetTop = this.el.nativeElement.offsetTop + this.el.nativeElement.offsetParent.offsetTop + this.el.nativeElement.offsetParent.offsetParent.offsetTop;
        this.smallBox.offsetLeft = this.el.nativeElement.offsetLeft + this.el.nativeElement.offsetParent.offsetLeft + this.el.nativeElement.offsetParent.offsetParent.offsetLeft;
        this.smallBox.boxWidth = this.el.nativeElement.offsetWidth;
        this.smallBox.boxHeight = this.el.nativeElement.offsetHeight;
        this.el.nativeElement.children[0].style.display = 'block';
        /***
         * 获取mask的参数
         */
        this.maskEvent.maskWidth = this.el.nativeElement.firstElementChild.clientWidth;
        this.maskEvent.maskHeight = this.el.nativeElement.firstElementChild.clientHeight;
        this.MagnifierOptions.emit({ isMagnifier: true });
    };
    PdcMagnifierDirective.prototype.onMouseMove = function (ev) {
        var e = ev || window.event;
        var x, y;
        x = e.pageX - this.smallBox.offsetLeft - this.maskEvent.maskWidth / 2;
        y = e.pageY - this.smallBox.offsetTop - this.maskEvent.maskHeight / 2;
        if (x <= 0) {
            x = 0;
        }
        if (y <= 0) {
            y = 0;
        }
        if (x >= this.el.nativeElement.offsetWidth - this.el.nativeElement.firstElementChild.offsetWidth) {
            x = this.el.nativeElement.offsetWidth - this.el.nativeElement.firstElementChild.offsetWidth; // 右侧边界判断
        }
        if (y >= this.el.nativeElement.offsetHeight - this.el.nativeElement.firstElementChild.offsetHeight) {
            y = this.el.nativeElement.offsetHeight - this.el.nativeElement.firstElementChild.offsetHeight; // 底部边界判断
        }
        this.MagnifierOptions.emit({ x: x, y: y, mx: this.maskEvent.maskWidth, my: this.maskEvent.maskHeight, sx: this.smallBox.boxWidth, sy: this.smallBox.boxHeight, ofx: this.el.nativeElement.firstElementChild.nextElementSibling.offsetLeft, ofy: this.el.nativeElement.firstElementChild.nextElementSibling.offsetTop, isMagnifier: true });
        this.el.nativeElement.firstElementChild.style.left = x + 'px';
        this.el.nativeElement.firstElementChild.style.top = y + 'px';
    };
    PdcMagnifierDirective.prototype.onMouseLeave = function (ev) {
        var e = ev || window.event;
        this.MagnifierOptions.emit({ isMagnifier: false });
        this.el.nativeElement.children[0].style.display = 'none';
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PdcMagnifierDirective.prototype, "MagnifierOptions", void 0);
    __decorate([
        HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PdcMagnifierDirective.prototype, "onMouseEnter", null);
    __decorate([
        HostListener('mousemove'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PdcMagnifierDirective.prototype, "onMouseMove", null);
    __decorate([
        HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PdcMagnifierDirective.prototype, "onMouseLeave", null);
    PdcMagnifierDirective = __decorate([
        Directive({
            selector: '[huatoMagnifierImg]'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], PdcMagnifierDirective);
    return PdcMagnifierDirective;
}());
export { PdcMagnifierDirective };

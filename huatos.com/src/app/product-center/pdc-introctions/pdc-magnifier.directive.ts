import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
@Directive({
    selector: '[huatoMagnifierImg]'
})
export class PdcMagnifierDirective {
  // @Input () defaultMagnifierImg;
  // @Input ('huatoMagnifierImg') MagnifierImg: string;
  @Output () MagnifierOptions = new EventEmitter();
  private maskEvent = {
    maskWidth: 0,
    maskHeight: 0,
    EventX: 0,
    EventY: 0,
    ElementMask: null
  };
  private smallBox = {
    offsetTop: null,
    offsetLeft: null,
    boxWidth: null,
    boxHeight: null
  };
  constructor( private el: ElementRef ) { }
  /**
   * 放大镜事件
   * @argument
   */
  @HostListener('mouseenter') onMouseEnter(para) {
    const e = para || window.event;
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
    this.MagnifierOptions.emit({isMagnifier: true});
  }
  @HostListener('mousemove') onMouseMove(ev) {
    const e = ev || window.event;
    let x, y;
    x = e.pageX - this.smallBox.offsetLeft - this.maskEvent.maskWidth / 2;
    y = e.pageY - this.smallBox.offsetTop - this.maskEvent.maskHeight / 2;
    if (x <= 0) {            // 左侧边界判断
        x = 0;
    }
    if (y <= 0) {            // 顶部边界判断
        y = 0;
    }
    if (x >= this.el.nativeElement.offsetWidth - this.el.nativeElement.firstElementChild.offsetWidth ) {
        x = this.el.nativeElement.offsetWidth - this.el.nativeElement.firstElementChild.offsetWidth;        // 右侧边界判断
    }
    if (y >= this.el.nativeElement.offsetHeight - this.el.nativeElement.firstElementChild.offsetHeight ) {
        y = this.el.nativeElement.offsetHeight - this.el.nativeElement.firstElementChild.offsetHeight;        // 底部边界判断
    }
    this.MagnifierOptions.emit({x: x, y: y, mx: this.maskEvent.maskWidth, my: this.maskEvent.maskHeight, sx: this.smallBox.boxWidth, sy: this.smallBox.boxHeight, ofx: this.el.nativeElement.firstElementChild.nextElementSibling.offsetLeft, ofy: this.el.nativeElement.firstElementChild.nextElementSibling.offsetTop, isMagnifier: true});
    this.el.nativeElement.firstElementChild.style.left = x + 'px';
    this.el.nativeElement.firstElementChild.style.top = y + 'px';
  }
  @HostListener('mouseleave') onMouseLeave(ev) {
    const e = ev || window.event;
    this.MagnifierOptions.emit({isMagnifier: false});
    this.el.nativeElement.children[0].style.display = 'none';
  }
}

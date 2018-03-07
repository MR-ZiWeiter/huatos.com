import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'huato-banner',
  template: `
    <nz-carousel nzAutoPlay>
      <div nz-carousel-content *ngFor="let index of array">
        <img src="../../../assets/image/public/others/main_banner/banner{{index}}.jpg">
      </div>
    </nz-carousel>`,
  styles  : [
      `:host ::ng-deep .ant-carousel .slick-slide {
      text-align: center;
      height: 430px;
      line-height: 430px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }
    h3 {
      color: #fff;
    }
    `
  ]
})
export class BannerComponent implements OnInit {
  array = [ 1 ];

  ngOnInit() {
    setTimeout(_ => {
      this.array = [ 1, 2, 3, 4, 5 ];
    }, 500);
  }
}

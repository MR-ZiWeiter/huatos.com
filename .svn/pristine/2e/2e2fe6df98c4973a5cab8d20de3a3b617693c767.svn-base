import { Component, OnInit } from '@angular/core';
import { LayoutFooterService } from './layout-footer.service';
import { Conts } from '../../interface/type-of-data.model';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'huato-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.sass'],
  providers: [ NzNotificationService ]
})
export class LayoutFooterComponent implements OnInit {
  public addcont: Conts|any = {};
  isFirst: boolean;
  constructor(
    private layoutFooterService: LayoutFooterService,
    private _notification: NzNotificationService
  ) { }

  ngOnInit() {
  }
  addConct() {
    'use strict';
    // console.log(this.addcont);
    if (this.addcont) {}
    this.layoutFooterService.addContactsAll(this.addcont)
    .then(Response => {
      // console.log(Response);
      if (Response.data === true) {
        this.isFirst = true;
        this._notification.create('success', '留言成功！', '我们将尽快和您联系，请保证您的通讯设备正常！谢谢！（请不要多次提交，谢谢合作！）');
      } else {
        this._notification.create('warning', '提示', '请完整填写留言内容！');
      }
    })
    .catch(err => {
      // console.log(err);
    });
  }
}

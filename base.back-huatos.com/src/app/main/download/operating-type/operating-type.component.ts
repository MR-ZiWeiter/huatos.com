import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DownloadTypeData } from './../download.interface';
import { PulService } from '../pul.service';
import { NzMessageService } from 'ng-zorro-antd';
import { DownloadService } from './../download.service';

@Component({
  selector: 'app-operating-type',
  templateUrl: './operating-type.component.html',
  styleUrls: ['./operating-type.component.sass']
})
export class OperatingTypeComponent implements OnInit {
  public DownloadTypeData: DownloadTypeData|any = {};
  private datatypeAll: DownloadTypeData|any;
  private isUpdata: boolean;
  constructor(
    private MessageService: NzMessageService,
    private pulService: PulService,
    private downloadService: DownloadService,
    private router: Router
  ) {
    this.datatypeAll = pulService.get_typeDataAll();
    if (this.datatypeAll === null || this.datatypeAll === undefined) {
      return;
    } else {
      this.isUpdata = true;
      this.DownloadTypeData = this.datatypeAll;
    }
  }
  ngOnInit() {}
  newSubmit() {
    if (!this.isUpdata) {
      this.downloadService.add_typedata(this.DownloadTypeData)
      .then(response => {
        // console.log(response);
        if (response.data === true) {
          this.MessageService.success('新增成功！');
          this.router.navigateByUrl('/main/download/typelist');
        } else {
          this.MessageService.error('新增失败！');
        }
      })
      .catch(err => {
        console.log('服务器错误，请稍后再试！');
      });
    } else {
      this.downloadService.up_typedata(this.DownloadTypeData)
      .then(response => {
        // console.log(response);
        if (response.data === true) {
          this.MessageService.success('修改成功！');
          this.router.navigateByUrl('/main/download/typelist');
        } else {
          this.MessageService.error('修改失败！');
        }
      })
      .catch(err => {
        console.log('服务器错误，请稍后再试！');
      });
    }
  }
}

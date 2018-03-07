import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DownloadService } from './download.service';
import { NzMessageService } from 'ng-zorro-antd';
import { PulService } from './pul.service';

@Component({
  selector: 'huato-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.sass']
})
export class DownloadComponent implements OnInit {

  public downloadCateList: any[] = [];
  constructor(
    private downloadService: DownloadService,
    private MessageService: NzMessageService,
    private pulService: PulService,
    private router: Router
  ) { }
  getDownloadCate() {
    this.downloadService.getdownloadList()
    .then(response => {
      if (response.success === false) { return; }
      if (response.data.length === 0) { this.downloadCateList = []; return; }
      this.downloadCateList = response.data;
      // this.setChildDoc(response.data[0]);
    })
    .catch(err => {
      console.log(err);
      this.MessageService.error('服务器错误，请稍后再试！');
      return;
    });
  }
  setChildDoc(value) {
    this.pulService.setdocdownload(value);
  }
  ngOnInit() {
    this.getDownloadCate();
    this.pulService.setdocdownload(this.downloadCateList[0]);
  }
}

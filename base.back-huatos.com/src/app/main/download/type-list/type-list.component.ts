import { DownloadService } from './../download.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { PulService } from '../pul.service';
import { DownloadTypeData } from '../download.interface';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.sass'],
  providers: [NzMessageService]
})
export class TypeListComponent implements OnInit {
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _deleteing: boolean;
  _editing: boolean;
  _operating: boolean;

  _dataSet: DownloadTypeData[]|any = [];
  _checkedData: any[] = [];
  _indeterminate = false;
  constructor (
    private router: Router,
    private MessageService: NzMessageService,
    private pulService: PulService,
    private downloadService: DownloadService
  ) {
    this.getTypeList();
  }
  _displayDataChange($event) {
    this._displayData = $event;
  }

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this._dataSet.some(value => value.checked);
    this._checkedNumber = this._dataSet.filter(value => value.checked).length;
    this.addCheckData();
  }
  addCheckData() {
    this._checkedData = [];
    this._dataSet.forEach(value => {
      if (value.checked === true) {
        this._checkedData.push(value);
      }
    });
  }
  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => data.checked = true);
    } else {
      this._displayData.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }
  getTypeList() {
    this.downloadService.getDataTypeList()
    .then(response => {
      if (response.success === false) { return; }
      // console.log(response);
      if (response.data.length === 0) { return; }
      this._dataSet = response.data;
    })
    .catch(err => {
      console.log(err);
      this.MessageService.error('服务器错误！请稍后再试！');
    });
  }
  _operateData() {
    this._operating = true;
    setTimeout(_ => {
      this._dataSet.forEach(value => value.checked = false);
      this._refreshStatus();
      this._operating = false;
    }, 1000);
  }
 /**
   * 编辑修改
   */
  _edited() {
    this._editing = true;
    if (this._checkedData.length !== 1) {
      this.MessageService.warning('仅允许同时修改单个资料！');
      return false;
    }
    this.pulService.set_typeDataAll(this._checkedData[0]);
    this.router.navigateByUrl('/main/download/editTypeList');
  }
  /**
   * 删除
   */
  _deleted() {
    this._deleteing = true;
    // console.log(this._checkedData);
    if (this._checkedData.length !== 1) {
      this.MessageService.warning('正在进行队列删除！请不要退出！');
      this._checkedData.forEach((value, index) => {
        this.downloadService.delete_typedata({id: this._checkedData[index].Datetype_ID})
        .then(response => {
          if (response.data === true) {
            this.MessageService.success('删除成功！');
          } else {
            this.MessageService.error('删除失败！');
          }
        })
        .catch(err => {
          this.MessageService.error('服务器错误！请稍后再试！');
        });
      });
      this.getTypeList();
      this._deleteing = false;
    } else {
      this.downloadService.delete_data({id: this._checkedData[0].Datetype_ID})
      .then(response => {
        if (response.data === true) {
          this.MessageService.success('删除成功！');
          this.getTypeList();
        } else {
          this.MessageService.error('删除失败！');
        }
      })
      .catch(err => {
        this.MessageService.error('服务器错误！请稍后再试！');
      });
      this._deleteing = false;
    }
  }
  /**
   * 查看资料
   */
  checking(value) {
    // console.log(value);
    this.pulService.set_typeDataAll(value);
    this.router.navigateByUrl('/main/download/downlist');
  }
  ngOnInit() {
    // for (let i = 0; i < 46; i++) {
    //   this._dataSet.push({
    //     key    : i,
    //     name   : `Edward King ${i}`,
    //     age    : 32,
    //     address: `London, Park Lane no. ${i}`,
    //   });
    // }
  }
}

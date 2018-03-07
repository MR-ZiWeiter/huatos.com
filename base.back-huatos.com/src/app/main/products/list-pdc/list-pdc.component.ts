import { Observable } from 'rxjs/Rx';
import { OperatingPdcService } from './../operating-pdc/operating.service';
import { Component, OnInit } from '@angular/core';
import { Getlistparams } from '../operating-pdc/operating.interface';
import { Subject } from 'rxjs/Subject';
import { PulService } from '../pul.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-list-pdc',
  templateUrl: './list-pdc.component.html',
  styleUrls: ['./list-pdc.component.sass'],
  providers: [ NzMessageService ]
})
export class ListPdcComponent implements OnInit {
  _allChecked: boolean;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _editing: boolean;
  _deleteding: boolean;
  _dataSet = [];
  _indeterminate: boolean;
  totalSize: number;
  _checkedData = [];
  get pageIndex(): number {
    return this.getListParam.pageindex;
  }
  set pageIndex(value: number) {
    this.getListParam.pageindex = value;
    this.getPdcList();
  }
  public getListParam: Getlistparams|any = {
    pageindex: 1
  };
  constructor(
    private operatingPdcService: OperatingPdcService,
    private pulService: PulService,
    private router: Router,
    private MessageService: NzMessageService
  ) {}
  _displayDataChange($event) {
    this._displayData = $event;
  }
  getPdcList() {
    this.operatingPdcService.getOperatingPdcList(this.getListParam)
    .then(response => {
      if (response.success === false) { return; }
      if (response.data.length > 0) {
        this._dataSet = response.data;
        this._dataSet.forEach((value, index) => {
          let oimglist = new Array();
          oimglist = value.Product_Img.split(',');
          this._dataSet[index].themImg = oimglist[0];
        });
        this.totalSize = response.data[0].Count;
      } else {
        this._dataSet = [];
      }
    })
    .catch(err => {
      console.log(err);
    });
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
  /**
   * 编辑修改
   */
  _edited() {
    this._editing = true;
    if (this._checkedData.length !== 1) {
      this.MessageService.warning('仅允许同时修改单个产品！');
      return false;
    }
    this.pulService.setId({id: this._checkedData[0].Product_ID});
    this.router.navigateByUrl('/main/pdc/operatingPdc');
  }
  /**
   * 删除
   */
  _deleted() {
    this._deleteding = true;
    console.log(this._checkedData);
    if (this._checkedData.length !== 1) {
      this.MessageService.warning('正在进行队列删除！请不要退出！');
      this._checkedData.forEach((value, index) => {
        this.operatingPdcService.deletePdc(this._checkedData[index])
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
      this.getPdcList();
      this._deleteding = false;
    } else {
      this.operatingPdcService.deletePdc(this._checkedData[0])
      .then(response => {
        if (response.data === true) {
          this.MessageService.success('删除成功！');
          this.getPdcList();
        } else {
          this.MessageService.error('删除失败！');
        }
      })
      .catch(err => {
        this.MessageService.error('服务器错误！请稍后再试！');
      });
      this._deleteding = false;
    }
  }
  console(e) {
    console.log(e);
  }
  ngOnInit() {
    this.getPdcList();
  }
}

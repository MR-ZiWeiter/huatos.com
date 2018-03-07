import { Router } from '@angular/router';
import { DownloadTypeData, DownloadData } from './../download.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PulService } from '../pul.service';
import { NzMessageService } from 'ng-zorro-antd';
import { DownloadService } from '../download.service';

@Component({
  selector: 'app-down-list',
  templateUrl: './down-list.component.html',
  styleUrls: ['./down-list.component.sass'],
  providers: [ NzMessageService ]
})
export class DownListComponent implements OnInit, OnDestroy {
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  /**
   * load
   */
  _deleteing: boolean;
  _editing: boolean;
  _operating: boolean;
  _dataSet: DownloadData[]|any = [];
  _checkedData: any[] = [];
  _typeAll: DownloadTypeData|any;
  _indeterminate = false;
  constructor(
    private pulService: PulService,
    private MessageService: NzMessageService,
    private downloadService: DownloadService,
    private router: Router
  ) {
    this._typeAll = pulService.get_typeDataAll();
    if (this._typeAll === null || this._typeAll === undefined) {
      this.downloadService.getDataTypeList()
      .then(response => {
        if (response.success === false) { return; }
        if (response.data.length === 0) {
          this.MessageService.warning('无分类模块，无法获取数据，请先添加分类！');
          return;
        } else {
          this._typeAll = response.data[0];
          this.getTypeIdIntroductions(this._typeAll.Datetype_ID);
        }
      })
      .catch(err => {
        console.log(err);
        this.MessageService.error('服务器错误，请稍后再试！');
      });
      return;
    }
    this.getTypeIdIntroductions(this._typeAll.Datetype_ID);
  }
  _displayDataChange($event) {
    this._displayData = $event;
  }
  getTypeIdIntroductions(params: number) {
    this.downloadService.getdataIntrodctions({id: params})
    .then(response => {
      if (response.success === false) { return; }
      if (response.data.length === 0) { return; }
      response.data.forEach((value, index) => {
        response.data[index].Datetype_ID = this._typeAll.Datetype_Name;
      });
      this._dataSet = response.data;

    })
    .catch(err => {
      console.log(err);
      this.MessageService.error('服务器错误，请稍后再试！');
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
    this.pulService.set_dataId(this._checkedData[0].Data_ID);
    this.router.navigateByUrl('/main/download/editordown');
  }
  /**
   * 删除
   */
  _deleted() {
    this._deleteing = true;
    console.log(this._checkedData);
    if (this._checkedData.length !== 1) {
      this.MessageService.warning('正在进行队列删除！请不要退出！');
      this._checkedData.forEach((value, index) => {
        this.downloadService.delete_data({id: this._checkedData[index].Data_ID})
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
      this.getTypeIdIntroductions(this._typeAll.Datetype_ID);
      this._deleteing = false;
    } else {
      this.downloadService.delete_data({id: this._checkedData[0].Data_ID})
      .then(response => {
        if (response.data === true) {
          this.MessageService.success('删除成功！');
          this.getTypeIdIntroductions(this._typeAll.Datetype_ID);
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
  ngOnInit() {
  }
  ngOnDestroy() {
    // 销毁实例
    console.log('已成功销毁实例！');
    this.pulService.inittypedata();
  }
}

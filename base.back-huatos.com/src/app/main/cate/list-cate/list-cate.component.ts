import { DeleteParent } from './../operating-cate/operating.interface';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { OperatingCateService } from '../operating-cate/operating-cate.service';
import { PulService } from './../pul.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cate',
  templateUrl: './list-cate.component.html',
  styleUrls: ['./list-cate.component.sass'],
  providers: [NzMessageService]
})
export class ListCateComponent implements OnInit {
  @Output() Type_Id: EventEmitter<number> = new EventEmitter();
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _deleteing = false;
  _editing = false;
  _dataSet = [];
  _indeterminate = false;
  _checkedData: [object]|any;
  ifChild: boolean;
  editRow = null;
  tempEditObject = {};
  editChildData: object|any;
  // get data(): object|any {
  //   // return this.pulService.serviceName;
  // }
  // set data(value: object|any) {
  //     // this.pulService.serviceName = value.;
  // }
  constructor (
    private operatingCateService: OperatingCateService,
    public pulService: PulService,
    private MessageService: NzMessageService,
    private router: Router,
    public changeDetectorRef: ChangeDetectorRef,
    public applicationRef: ApplicationRef
  ) {
    // setTimeout(function() {
      // changeDetectorRef.detectChanges();
    // }, 1000);
  }
  _displayDataChange($event) {
    // console.log($event);
    this._displayData = $event;
  }
  getCates() {
    this.operatingCateService.getCate()
    .then(response => {
      if (response.success === false) { return; }
      this._dataSet = response.data;
    })
    .catch(err => {
      this._dataSet = [];
    });
  }
  _refreshStatus( e?: any, data ?: any ) {
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
    this._checkedData = [];
    if (value) {
      this._displayData.forEach(data => { data.checked = true; this._checkedData.push(value); } );
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
  _deleteCate() {
    this._deleteing = true;
    // console.log(this._checkedData);
    if (this._checkedData.length !== 1) {
      this.MessageService.warning('正在进行队列删除！请不要退出！');
      this._checkedData.forEach((value, index) => {
        this.operatingCateService.deleteParentCate(value)
        .then(response => {
          if (response.data === true) {
            this.MessageService.success('删除成功！');
            this.getCates();
          } else {
            this.MessageService.error('删除失败！');
          }
        })
        .catch(err => {
          this.MessageService.error('服务器错误！请稍后再试！');
        });
      });
      this.getCates();
      this._deleteing = false;
    } else {
      this.operatingCateService.deleteParentCate(this._checkedData[0])
      .then(response => {
        if (response.data === true) {
          this.MessageService.success('删除成功！');
          this.getCates();
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
  _editCate() {
    if ( this._checkedData.length === 1 ) {
      this.pulService.setPul(this._checkedData[0]);
      this.router.navigateByUrl('/main/cate/operatingCate');
    } else {
      this.MessageService.error('仅允许修改一条数据！');
    }
  }
  /**
   * @param data 第二个表
   */
  edit(data, pdata) {
    this.tempEditObject[ data.Type_id ] = { ...data };
    this.editRow = data.Type_id;
  }

  save(data, pdata) {
    Object.assign(data, this.tempEditObject[ data.Type_id ]);
    this.editRow = null;
    this.editChildData = {
      Type_ID: pdata.Type_id,
      SmallType_ID: data.Type_id,
      Type_Name: data.Type_Name
    };
    this.operatingCateService.updatachild(this.editChildData)
    .then(response => {
      if (response.data === 1) {
        this.MessageService.success('修改子级分类成功！');
      } else {
        this.MessageService.error('修改子级分类失败！');
      }
    })
    .catch(err => {
      this.MessageService.error('服务器错误！请稍后再试！');
    });
  }

  cancel(data, pdata) {
    this.tempEditObject[ data.Type_id ] = {};
    this.editRow = null;
  }
  deleteChilds(data, pdata) {
    this.operatingCateService.deleteChildCate(data)
      .then(response => {
        if (response.data === true) {
          this.MessageService.success('删除成功！');
          this.getCates();
        } else {
          this.MessageService.error('删除失败！');
        }
      })
      .catch(err => {
        this.MessageService.error('服务器错误！请稍后再试！');
      });
  }
  ngOnInit() {
    this.getCates();
  }
}

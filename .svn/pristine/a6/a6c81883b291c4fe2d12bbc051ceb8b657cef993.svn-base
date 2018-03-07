import { Router } from '@angular/router';
import { RecruitmentService } from './../recruitment.service';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { RePulService } from '../recruitmentpul.service';

@Component({
  selector: 'app-list-recruitment',
  templateUrl: './list-recruitment.component.html',
  styleUrls: ['./list-recruitment.component.sass'],
  providers: [NzMessageService]
})
export class ListRecruitmentComponent implements OnInit {
  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _checkedData: any[] = [];
  _displayData: Array<any> = [];
  _operating = false;
  _editing: boolean;
  _deleteding: boolean;
  _dataSet = [];
  _indeterminate = false;
  constructor (
    private MessageService: NzMessageService,
    private pulService: RePulService,
    private recruitmentService: RecruitmentService,
    private router: Router
  ) {}
  _displayDataChange($event) {
    this._displayData = $event;
  }
  getRecruitmentList() {
    this.recruitmentService.get_TypeRecruitment()
    .then(response => {
      if (response.success === false) { return; }
      if (response.data.length === 0) { this._dataSet = []; return; }
      this._dataSet = response.data;
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

  _edited() {
    this._editing = true;
    if (this._checkedData.length > 1) {
      this.MessageService.warning('当前选中的数据超过一条，暂不支持多条数据的更改！');
      this._editing = false;
      return;
    }
    this.pulService.setRecruitmentid(this._checkedData[0].personnel_ID);
    this.router.navigateByUrl('/main/recruitment/editRecruitment');
  }
  _deleted() {
    this._deleteding = true;
    // console.log(this._checkedData);
    if (this._checkedData.length !== 1) {
      this.MessageService.warning('正在进行队列删除！请不要退出！');
      this._checkedData.forEach((value, index) => {
        this.recruitmentService.delete_recruitment(value)
        .then(response => {
          if (response.data === true) {
            this.MessageService.success('删除成功！');
            this.getRecruitmentList();
          } else {
            this.MessageService.error('删除失败！');
          }
        })
        .catch(err => {
          this.MessageService.error('服务器错误！请稍后再试！');
        });
      });
      this.getRecruitmentList();
      this._deleteding = false;
    } else {
      this.recruitmentService.delete_recruitment(this._checkedData[0])
      .then(response => {
        if (response.data === true) {
          this.MessageService.success('删除成功！');
          this.getRecruitmentList();
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

  ngOnInit() {
    this.getRecruitmentList();
  }
}

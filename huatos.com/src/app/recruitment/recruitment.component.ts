import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RecruitmentService } from './recruitment.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'huato-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.sass']
})
export class RecruitmentComponent implements OnInit {

  public RecruitmentsCateList: any[] = [];
  public _isSpinning: boolean|any = true;

  constructor(
    private recruitmentService: RecruitmentService,
    private MessageService: NzMessageService,
    private router: Router
  ) { }
  getTypeList() {
    this.recruitmentService.getRecruitmentTypeList()
    .then(response => {
      if (response.success === false) { return; }
      if (response.data.length === 0) { this.RecruitmentsCateList = []; return; }
      this.RecruitmentsCateList = response.data;
    })
    .catch(err => {
      console.log(err);
      this.MessageService.error('服务器错误，请稍后再试！');
      return;
    });
    this._isSpinning = false;
  }
  ngOnInit() {
    this.getTypeList();
  }

}

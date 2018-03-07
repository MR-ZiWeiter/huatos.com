import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecruitmentIntrotions } from '../recruitment.interface';
import { RecruitmentService } from '../recruitment.service';
import { NzMessageService } from 'ng-zorro-antd';
import { RePulService } from '../recruitmentpul.service';
@Component({
  selector: 'app-operating-recruitment',
  templateUrl: './operating-recruitment.component.html',
  styleUrls: ['./operating-recruitment.component.sass'],
  providers: [ NzMessageService ]
})
export class OperatingRecruitmentComponent implements OnInit, OnDestroy {
  public recruitmentIntrotionsStr: RecruitmentIntrotions|any = {};
  private isUpdate: boolean;
  private ReMentId: number;
  constructor(
    private recruitmentService: RecruitmentService,
    private router: Router,
    private MessageService: NzMessageService,
    private pulService: RePulService
  ) {
    this.ReMentId = pulService.getRecruitmentid();
    if (this.ReMentId === null || this.ReMentId === undefined) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
      this.recruitmentService.get_recruitment({id: this.ReMentId})
      .then(response => {
        if (response.success === false) { return; }
        if (response.data.length === 0) { return; }
        this.recruitmentIntrotionsStr = response.data[0];
      })
      .catch(err => {
        this.MessageService.error('获取数据时错误，请稍后再试！');
      });
    }
  }

  ngOnInit() {
  }
  InputContent(value) {
    this.recruitmentIntrotionsStr.personnel_content = value;
  }
  newSubmit() {
    if (this.isUpdate) {
      // 修改
      this.recruitmentService.update_recruitment(this.recruitmentIntrotionsStr)
      .then(response => {
        if (response.data === true) {
          this.MessageService.success('修改成功！');
          this.router.navigateByUrl('/main/recruitment/listRecruitment');
        } else {
          this.MessageService.error('修改失败！');
        }
      })
      .catch(err => {
        console.log(err);
        this.MessageService.error('服务器错误，请稍后再试！');
      });
    } else {
      this.recruitmentService.add_recruitment(this.recruitmentIntrotionsStr)
      .then(response => {
        if (response.data === true) {
          this.MessageService.success('新增成功！');
          this.router.navigateByUrl('/main/recruitment/listRecruitment');
        } else {
          this.MessageService.error('新增失败！');
        }
      })
      .catch(err => {
        console.log(err);
        this.MessageService.error('服务器错误，请稍后再试！');
      });
    }
  }
  ngOnDestroy() {
    // 销毁实例
    console.log('已销毁实例!');
    this.pulService.init();
  }
}

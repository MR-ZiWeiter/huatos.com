import { Router } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Solution } from '../solution.model.interface';
import { SolutionService } from './../solution.service';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { PulService } from '../list-solution/Pul.service';
import { other } from './../../../config/config';

@Component({
  selector: 'app-operating-solution',
  templateUrl: './operating-solution.component.html',
  styleUrls: ['./operating-solution.component.sass'],
  providers: [NzMessageService]
})
export class OperatingSolutionComponent implements OnInit, OnDestroy {
  public solutionsIntrotionsStr: Solution|any = {};
  InputId: number;
  private isUpdata: boolean;
  uploadUrl: string = other.upload;
  fileList: File|any = [];
  previewImage = '';
  previewVisible = false;
  constructor(
    private solutionService: SolutionService,
    private MessageService: NzMessageService,
    private pulService: PulService,
    private router: Router
  ) {
    this.InputId = pulService.getSolutionsId();
    // console.log(this.InputId);
    if (this.InputId !== null && this.InputId !== undefined) {
      this.solutionService.getSolutionsIntrodctions({id: this.InputId})
      .then(response => {
        if (response.data.length !== 0) {
          this.solutionsIntrotionsStr = response.data[0];
          this.isUpdata = true;
        } else {
          this.MessageService.error('获取数据错误！');
        }
      })
      .catch(err => {
        console.log(err);
        this.MessageService.error('服务器获取数据错误！');
      });
    }
  }
  InputContent(content: any) {
    this.solutionsIntrotionsStr.Details_content = content;
  }
  newSubmit() {
    if (!this.isUpdata) {
      // console.log(this.solutionsIntrotionsStr);
      this.solutionService.addSolutions(this.solutionsIntrotionsStr)
      .then(response => {
        if (response.data === true) {
          this.MessageService.success('新增解决方案成功！');
          this.router.navigateByUrl('/main/solution/listSolution');
        } else {
          this.MessageService.error('新增解决方案失败！');
        }
      })
      .catch(err => {
        console.log(err);
        this.MessageService.error('服务器错误！请稍后再试！');
      });
    } else {
      // console.log(this.solutionsIntrotionsStr);
      this.solutionService.updataSolutions(this.solutionsIntrotionsStr)
      .then(response => {
        if (response.data === true) {
          this.MessageService.success('更新成功！');
          this.router.navigateByUrl('/main/solution/listSolution');
        } else {
          this.MessageService.error('更新失败！');
        }
      })
      .catch(err => {
        console.log(err);
        this.MessageService.error('服务器错误！请稍后再试！');
      });
    }
  }
  uploadImgChange(info) {
    if ( info.fileList.length === 0 ) { this.solutionsIntrotionsStr.Details_img = '';  return; }
    if ( info.file.response ) {
      this.fileList = [];
      this.solutionsIntrotionsStr.Details_img = info.file.response.ImgUrl;
      this.fileList.push({
        url: info.file.response.ImgUrl,
        uid: info.file.uid,
        status: info.file.status,
        name: info.file.name
      });
    }
  }
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    // 销毁实例
    console.log('已销毁实例！');
    this.pulService.init();
  }
}

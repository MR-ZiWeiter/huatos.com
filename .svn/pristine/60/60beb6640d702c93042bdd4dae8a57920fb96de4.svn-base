import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddChild, AddParent, Cate } from './operating.interface';
import { OperatingCateService } from './operating-cate.service';
import { NzMessageService } from 'ng-zorro-antd';
import { PulService } from './../pul.service';
@Component({
  selector: 'app-operating-cate',
  templateUrl: './operating-cate.component.html',
  styleUrls: ['./operating-cate.component.sass'],
  providers: [ OperatingCateService, NzMessageService ]
})
export class OperatingCateComponent implements OnInit, OnDestroy {
  public isParent = true;
  public catename: string;
  public cateOptions: object[] = [];
  public cateValue: object[] = [];
  public RecommendOptions: object[] = [];
  public RecommendValue: object[];
  public isDisabled: boolean;
  public cates: Cate = {
    Type_Name: null,
    SmallType_Name: null,
    Type_ID: null,
    SmallType_ID: null
  };
  public isUpdata: boolean;
  constructor(
    private operatingCateService: OperatingCateService,
    private MessageService: NzMessageService,
    public pulService: PulService,
    private router: Router
  ) {
    this.getCateAlls();
  }
  get data(): string {
    return this.pulService.serviceName;
  }
  set data(value: string) {
      this.pulService.serviceName = value;
  }
  ngOnInit() {
    console.log(this.pulService.isUpdata);
    if (this.pulService.isUpdata) {
      this.cates.Type_Name = this.pulService.serviceName;
      this.cates.Type_ID = this.pulService.serviceTid;
      this.cates.SmallType_ID = this.pulService.serviceCid;
      if (this.pulService.ifChild) {
        this.isParent = false;
      } else {
        this.isDisabled = true;
      }
    } else {
      this.isUpdata = false;
    }
    // console.log(this.pulService.getPul());
    // console.log(this.pulService.serviceName);
    // console.log(this.cateOptions);
  }
  getCateAlls() {
    this.operatingCateService.getCate()
      .then(response => {
        if (response.success === false) { return; }
        if (response.data.length === 0) { return; }
        for ( let i = 0; i < response.data.length; i++ ) {
          this.cateOptions.push({value: response.data[i].Type_id, label: response.data[i].Type_Name, isLeaf: true});
        }
        if (this.cateValue.length === 0) {
          this.cateValue.push({value: response.data[0].Type_id, label: response.data[0].Type_Name, isLeaf: true});
          this.cates.Type_ID = response.data[0].Type_id;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  newSubmit() {
    if ( !this.isUpdata ) {
      if (this.isParent) {
        this.operatingCateService.addparent(this.cates)
        .then(response => {
          if (response.data === true) {
            this.MessageService.success('新增父级分类成功！');
            this.cates.Type_Name = '';
            this.getCateAlls();
            this.router.navigateByUrl('/main/cate/listcate');
          } else {
            this.MessageService.error('新增父级分类失败！');
          }
        })
        .catch(err => {
          this.MessageService.error('新增父级分类失败！');
        });
      } else {
        this.operatingCateService.addchild(this.cates)
        .then(response => {
          if (response.data === true) {
            this.MessageService.success('新增子级分类成功！');
            this.cates.Type_Name = '';
            this.getCateAlls();
            this.router.navigateByUrl('/main/cate/listcate');
          } else {
            this.MessageService.error('新增子级分类失败！');
          }
        })
        .catch(err => {
          this.MessageService.error('新增子级分类失败！');
        });
      }
    } else {
      if (this.isParent) {
        this.operatingCateService.updataparent(this.cates)
        .then(response => {
          if (response.data === true) {
            this.MessageService.success('修改父级分类成功！');
            this.cates.Type_Name = '';
            this.getCateAlls();
            this.router.navigateByUrl('/main/cate/listcate');
          } else {
            this.MessageService.error('修改父级分类失败！');
          }
        })
        .catch(err => {
          this.MessageService.error('修改父级分类失败！');
        });
      } else {
        this.operatingCateService.updatachild(this.cates)
        .then(response => {
          if (response.data === true) {
            this.MessageService.success('修改子级分类成功！');
            this.cates.Type_Name = '';
            this.getCateAlls();
            this.router.navigateByUrl('/main/cate/listcate');
          } else {
            this.MessageService.error('修改子级分类失败！');
          }
        })
        .catch(err => {
          this.MessageService.error('修改子级分类失败！');
        });
      }
    }
  }
  _console(e: any) {
    this.cateValue = e;
    this.cates.Type_ID = e[0].value;
  }
  ngOnDestroy () {
    console.log('销毁实例并初始化服务！');
    this.pulService.init();
  }
}

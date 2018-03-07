import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { other, product } from './../../../config/config';
import { UploadFile, UploadPdc } from './operating.interface';
import { OperatingCateService } from '../../cate/operating-cate/operating-cate.service';
import { Observable } from 'rxjs/Rx';
import { OperatingPdcService } from './operating.service';
import { PulService } from '../pul.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-operating-pdc',
  templateUrl: './operating-pdc.component.html',
  styleUrls: ['./operating-pdc.component.sass'],
  providers: [ NzMessageService ]
})
export class OperatingPdcComponent implements OnInit, OnDestroy {
  public cateOptions: any[] = [];
  public cateValue: object[] = [];
  public uploadUrl: string = other.upload;
  public RecommendOptions: any[];
  public isNgxEditor: boolean;
  public RecommendValue: any[] = [];
  // public inputValue: string;
  public fileList = [];
  public previewImage = '';
  public previewVisible = false;
  public isUpdata: boolean;
  public isShowOptions: boolean;
  isShowOptionsCate: boolean;
  isShowOptionsRecom: boolean;
  public uploadPdc: UploadPdc | any = {
    // Product_NAME: null,
    // Product_Img: null,
    // Characteristic: null,
    // Type_ID: null,
    // SmallType_ID: null,
    // Product_DESC: null,
    // Product_Range: null,
    Product_RangeImg: null,
    // ProductDetails: null,
    // Product_heat: null,
    // Product_Data: null
  };
  public downData = [];

  constructor(
    private operatingCateService: OperatingCateService,
    private operatingPdcService: OperatingPdcService,
    private pulService: PulService,
    private MessageService: NzMessageService,
    private router: Router
  ) {
    // 初始化数据
    this.RecommendOptions = [{ value: 1, label: '是', isLeaf: true }, { value: 0, label: '否', isLeaf: true }];
    // 获取分类信息
    this.getCates();
    if (this.pulService.getId() !== null && this.pulService.getId() !== undefined) {
      // 改变提交数据的方式
      this.isUpdata = true;
      // 获取有关产品的详情
      this.operatingPdcService.getOperatingIntroductions({id: this.pulService.getId()})
      .then(response => {
        this.uploadPdc = response.data;
        // 插入产品的ID
        this.uploadPdc.Product_ID = this.pulService.getId();
        let oimglist = new Array();
        oimglist = this.uploadPdc.Product_Img.split(',');
        oimglist.forEach((value, index) => {
          this.fileList.push({url: value, uid: index, status: 'done'});
        });
        // console.log(response.data.Product_heat);
        if (response.data.Product_heat === 1) {
          this.RecommendValue.push({ value: 1, label: '是', isLeaf: true });
        } else {
          this.RecommendValue.push({ value: 0, label: '否', isLeaf: true });
        }
        this.isShowOptionsRecom = true;
        this.cateOptions.forEach(value => {
          // console.log(value, response.data);
          if (value.value === response.data.Type_id) {
            if (response.data.SmallType_ID !== null && response.data.SmallType_ID !== undefined && response.data.SmallType_ID !== 0) {
              this.cateValue.push(value);
              // console.log(this.cateValue);
              value.children.forEach(childVal => {
                if (childVal.value === response.data.SmallType_ID) {
                  this.cateValue.push(childVal);
                  // console.log(this.cateValue);
                }
              });
            } else {
              this.cateValue.push(value);
            }
            this.isShowOptionsCate = true;
          }
        });
        // console.log(this.cateValue);
        this.isShowOptions = true;
        return;
      })
      .catch(err => {
        console.log(err);
      });
    } else {
      this.isShowOptions = true;
      this.isShowOptionsRecom = true;
    }
  }
  UpImgChange(info): void {
    const fileList = info.fileList;
    // 2. 替换地址
    if (info.file.response) {
      info.file.url = info.file.response.ImgUrl;
    }
    // console.log(info.file);
    // 3. 过滤上传失败的
    this.fileList = fileList.filter(item => {
      if (item.response) {
        return item.response.State === 200;
      }
      if (item.url) {
        return true;
      }
      return true;
    });
    // console.log(this.fileList);
  }
  /**
   * 图片处理器
   * @param info 返回的file集合
   */
  UpdataChange(info) {
    const downData = info.fileList;
    // 2. 替换地址
    if (info.file.response) {
      info.file.url = info.file.response.ImgUrl;
    }
    // 3. 过滤上传失败的
    this.downData = downData.filter(item => {
      if (item.response) {
        return item.response.State === 200;
      }
      return true;
    });
  }
  getCates () {
    this.operatingCateService.getCate()
    .then(response => {
      // console.log(response);
      if (response.success === false) { return; }
      response.data.forEach(value => {
        if (value.subnideNode.length === 0) {
          this.cateOptions.push({value: value.Type_id, label: value.Type_Name, isLeaf: true});
        } else {
          const child = [];
          value.subnideNode.forEach(childVal => {
            child.push({value: childVal.Type_id, label: childVal.Type_Name, isLeaf: true});
          });
          this.cateOptions.push({value: value.Type_id, label: value.Type_Name, isLeaf: false, children: child});
        }
      });
      this.isShowOptionsCate = true;
    })
    .catch();
  }
  initSetFileUrl() {
    if (this.fileList.length === 0) { return; }
    this.uploadPdc.Product_Img = '';
    // console.log(this.fileList);
    this.fileList.forEach(value => {
      value.url === undefined ? this.uploadPdc.Product_Img += value.response.ImgUrl + ',' : this.uploadPdc.Product_Img += value.url + ',';
      // this.uploadPdc.Product_Img += value.url + ',' || value.response.ImgUrl + ',';
    });
    // 去除最后一个字符
    this.uploadPdc.Product_Img = this.uploadPdc.Product_Img.substring(0, this.uploadPdc.Product_Img.length - 1);
  }
  _setHot(ev) {
    this.uploadPdc.Product_heat = this.RecommendValue[0];
  }
  _setCateChange(ev) {
    // 将选中的值赋给储存器 并保存需要提交的数据
    // console.log(ev);
    this.cateValue = ev;
    if (ev.length > 1) {
      this.uploadPdc.Type_ID = ev[1].parent.value;
      this.uploadPdc.SmallType_ID = ev[1].value;
    } else {
      this.uploadPdc.Type_ID = ev[0].value;
      this.uploadPdc.SmallType_ID = null;
    }
  }
  _newSubmit(ev) {
    if ( this.isUpdata ) {
      // 获取图片地址
      this.initSetFileUrl();
      // 更新产品
      delete this.uploadPdc['Product_RangeImg'];
      // delete this.uploadPdc['Product_heat'];
      delete this.uploadPdc['Type_id'];
      // console.log(this.uploadPdc);
      this.operatingPdcService.updataproducts(this.uploadPdc)
      .then(response => {
        if (response.data === true) {
          this.MessageService.success('更新成功！');
          this.router.navigateByUrl('/main/pdc/listpdc');
        } else {
          this.MessageService.error('更新失败！');
        }
      })
      .catch(err => {
        this.MessageService.error('服务器错误，请稍后再试！');
      });
    } else {
      // 获取图片地址
      this.initSetFileUrl();
      // 新增产品
      this.operatingPdcService.postOperatingPdc(this.uploadPdc)
      .then(response => {
        if (response.data === true) {
          this.MessageService.success('新增成功！');
          this.router.navigateByUrl('/main/pdc/listpdc');
        } else {
          this.MessageService.error('新增失败！');
        }
      })
      .catch(err => {
        this.MessageService.error('服务器错误，请稍后再试！');
      });
    }
  }
  InputContent(content: string, index: number) {
    switch (index) {
      case 1:
        this.uploadPdc.Characteristic = content;
      break;
      case 2:
        this.uploadPdc.ProductDetails = content;
      break;
      case 3:
        this.uploadPdc.Product_Range = content;
      break;
      case 4:
        this.uploadPdc.Product_Data = content;
      break;
      default:
    }
  }
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }
  ngOnInit() {
    // console.log(this.pulService.getId());
    // console.log(this.uploadPdc);
  }
  ngOnDestroy() {
    console.log('销毁实例并初始化服务！');
    this.pulService.init();
  }
}

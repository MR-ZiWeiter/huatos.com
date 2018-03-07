import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../download.service';
import { PulService } from '../pul.service';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { DownloadData } from '../download.interface';
import { other } from './../../../config/config';
interface File {
  name: string;
  url: string;
  uid: string;
  status: string;
}
@Component({
  selector: 'app-operating-down',
  templateUrl: './operating-down.component.html',
  styleUrls: ['./operating-down.component.sass']
})
export class OperatingDownComponent implements OnInit {
  private dataId: number;
  public DownloadData: DownloadData|any = {};
  uploadUrl: string = other.upload;
  fileList: File|any = [];
  fileLists: File|any = [];
  previewImage = '';
  previewVisible = false;
  isShowOptionsCate: boolean;
  cateOptions = [];
  cateValue = [];

  constructor(
    private downloadService: DownloadService,
    private pulService: PulService,
    private MessageService: NzMessageService,
    private router: Router
  ) {
    this.dataId = pulService.get_dataId();
    // console.log(this.dataId);
    if (this.dataId === null || this.dataId === undefined) {
      this.getTypeList();
      return;
    } else {
      this.getdataIntrodctions();
    }
    this.getTypeList();
  }
  getdataIntrodctions() {
    this.downloadService.getDownIntro({id: this.dataId})
    .then(response => {
      // console.log(response);
      this.DownloadData = response.data;
    })
    .catch(err => {
      this.MessageService.error('服务器错误，请稍后再试！');
    });
  }
  getTypeList() {
    this.downloadService.getDataTypeList()
    .then(response => {
      if (response.success === false) { return; }
      if (response.data.length === 0) { return; }
      response.data.forEach(values => {
        this.cateOptions.push({value: values.Datetype_ID, label: values.Datetype_Name, isLeaf: true});
        if (values.Datetype_ID === this.DownloadData.Datetype_ID) {
          this.cateValue.push({value: values.Datetype_ID, label: values.Datetype_Name, isLeaf: true});
        }
      });
      this.isShowOptionsCate = true;
      // console.log(this.cateValue);
    })
    .catch(err => {
      console.log(err);
      this.MessageService.error('服务器错误！请稍后再试！');
    });
  }
  newSubmit() {
    this.downloadService.add_data(this.DownloadData)
    .then(response => {
      if (response.data === true) {
        this.MessageService.success('新增成功！');
        this.router.navigateByUrl('/main/download/downlist');
      } else {
        this.MessageService.error('新增失败！');
      }
    })
    .catch(err => {
      console.log(err);
      this.MessageService.error('服务器错误，请稍后再试！');
    });
  }
  uploadImgChange(info) {
    if ( info.fileList.length === 0 ) { this.DownloadData.Data_Img = '';  return; }
    if ( info.file.response ) {
      this.fileList = [];
      this.DownloadData.Data_Img = info.file.response.ImgUrl;
      this.fileList.push({
        url: info.file.response.ImgUrl,
        uid: info.file.uid,
        status: info.file.status,
        name: info.file.name
      });
    }
  }
  uploadFileChange(info) {
    if ( info.fileList.length === 0 ) { this.DownloadData.Data_URL = '';  return; }
    if ( info.file.response ) {
      if (info.file.response.State === 200) {
        this.fileLists = [];
        this.DownloadData.Data_URL = info.file.response.ImgUrl;
        this.fileLists.push({
          url: info.file.response.ImgUrl,
          uid: info.file.uid,
          status: info.file.status,
          name: info.file.name
        });
      } else {
        this.fileLists = [];
        this.MessageService.warning('选择的文件格式不支持上传！');
      }
    }
  }
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }
  _setCateChange(ev) {
    // 将选中的值赋给储存器 并保存需要提交的数据
    this.cateValue = ev;
    this.DownloadData.Datetype_ID = ev[0].value;
  }
  ngOnInit() {
  }

}

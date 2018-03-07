import { DownloadService } from './../download.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { DownloadDetails, DocDownload } from './../download.interface';
import { PulService } from '../pul.service';
@Component({
  selector: 'huato-download-details',
  templateUrl: './download-details.component.html',
  styleUrls: ['./download-details.component.sass'],
  providers: [NzMessageService]
})
export class DownloadDetailsComponent implements OnInit {

  set contack_id(value: number){
    // console.log(value);
    // this.menudata = this.pulService.getdocdownload();
    // alert(JSON.stringify(this.menudata));
    this.getMenuData(value);
    if (Number(value) === 1) { this.getDownloadCate(value); return; }
    this.getIntroductions(value);
  }
  public parentCateList: any[] = [];
  public ContentJson: DownloadDetails[] = [];
  public menudata: DocDownload|any = {
    Datetype_ID: null,
    Datetype_Name: null
  };
  constructor(
    private _activetedRoute: ActivatedRoute,
    private downloadSerive: DownloadService,
    private MessageService: NzMessageService,
    private router: Router,
    public pulService: PulService
  ) { }
  getMenuData(value: number) {
    this.parentCateList.forEach(values => {
      if ( Number(values.Datetype_ID) === Number(value) ) {
        this.menudata = values;
        return;
      }
    });
  }
  getIntroductions(params: number) {
    this.downloadSerive.getdownloadIntroductionList({id: params})
    .then(response => {
      if (response.success === false) { return; }
      // console.log('*************************');
      // console.log(response);
      if (response.data.length === 0) { this.ContentJson = []; return; }
      this.ContentJson = response.data;
      // console.log(this.ContentJson);
    })
    .catch(err => {
      console.log(err);
      this.MessageService.error('服务器错误，请稍后再试！');
    });
  }
  getDownloadCate(values) {
    this.downloadSerive.getdownloadList()
    .then(response => {
      if (response.success === false) { return; }
      if (response.data.length === 0) { return; }
      // console.log('-----------------------');
      // console.log(response.data[0].Datetype_ID);
      if ( this.menudata.Datetype_ID === null || this.menudata === null || this.menudata === undefined ) { this.menudata = response.data[0]; }
      // console.log('%c singList:', 'background: #000; color: RED');
      // console.log(this.menudata);
      this.parentCateList = response.data;
      this.router.navigateByUrl('/download/details/' + response.data[0].Datetype_ID);
      this.getIntroductions(values);
      // this.contack_id = response.data.Details_ID;
      // return response.data;
    })
    .catch(err => {
      console.log(err);
      this.MessageService.error('服务器错误，请稍后再试！');
    });
  }
  ngOnInit() {
    /**
     * 快照的方式只能得到第一次进入时的id值
     * @this._activetedRoute.snapshot.params['id']
     * this.contack_id = this._activetedRoute.snapshot.params['id'];
     */
    // this.getDownloadCate(this.contack_id);
    this._activetedRoute.params.subscribe((params: Params) => {
      this.contack_id = params['id'];
    });
    // const _ = this;
    // setTimeout(function(){alert( _.pulService.getdocdownload() ); }, 500);
  }

}

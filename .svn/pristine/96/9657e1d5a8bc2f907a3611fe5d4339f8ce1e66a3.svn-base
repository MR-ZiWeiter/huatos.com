import { RecruitmentService } from './../../recruitment.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { RecruitmentIntroductions } from '../../recruitment.interface';
@Component({
  selector: 'huato-recruitment-details',
  templateUrl: './recruitment-details.component.html',
  styleUrls: ['./recruitment-details.component.sass'],
  providers: [NzMessageService]
})
export class RecruitmentDetailsComponent implements OnInit {
  set contack_id(value: number){
    this.getIntroductions({id: value});
  }
  public ContentJson: RecruitmentIntroductions|any = {};
  constructor(
    private _activetedRoute: ActivatedRoute,
    private recruitmentsService: RecruitmentService,
    private MessageService: NzMessageService,
    private router: Router
  ) { }
  getIntroductions(params: object|any) {
    this.recruitmentsService.getRecruitmentIntroductions(params)
    .then(response => {
      if (response.success === false) { return; }
      // console.log(response.data);
      if (response.data.length === 0) { this.ContentJson = {}; this.router.navigateByUrl('/recruitment/details/' + (Number(params.id) + 1)); return; }
      this.ContentJson = response.data[0];
    })
    .catch(err => {
      console.log(err);
      this.MessageService.error('服务器错误，请稍后再试！');
      return;
    });
  }
  ngOnInit() {
    /**
     * 快照的方式只能得到第一次进入时的id值
     * @this._activetedRoute.snapshot.params['id']
     * this.contack_id = this._activetedRoute.snapshot.params['id'];
     */
    this._activetedRoute.params.subscribe((params: Params) => {
      this.contack_id = params['id'];
    });
  }
}

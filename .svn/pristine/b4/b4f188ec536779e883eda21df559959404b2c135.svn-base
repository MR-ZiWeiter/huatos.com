import { SolutionService } from './../solution.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'huato-solution-details',
  templateUrl: './solution-details.component.html',
  styleUrls: ['./solution-details.component.sass'],
  providers: [NzMessageService]
})
export class SolutionDetailsComponent implements OnInit {
  set contack_id(value: number){
    if (Number(value) === 1) { this.getSolutionsCate(); return; }
    this.getIntroductions(value);
  }
  public ContentJson: object|any;
  constructor(
    private _activetedRoute: ActivatedRoute,
    private solutionService: SolutionService,
    private MessageService: NzMessageService,
    private router: Router
  ) { }
  getIntroductions(params: number) {
    this.solutionService.getSolutionsIntroductions({id: params})
    .then(response => {
      if (response.success === false) { return; }
      if (response.data.length === 0) { return; }
      this.ContentJson = response.data[0];
    })
    .catch(err => {
      console.log(err);
      this.MessageService.error('服务器错误，请稍后再试！');
      return;
    });
  }
  getSolutionsCate() {
    this.solutionService.getSolutionsList()
    .then(response => {
      if (response.success === false) { return; }
      if (response.data.length === 0) { return; }
      this.router.navigateByUrl('/solution/details/' + response.data[0].Details_ID);
      // this.contack_id = response.data.Details_ID;
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
    this._activetedRoute.params.subscribe((params: Params) => {
      this.contack_id = params['id'];
    });
  }

}

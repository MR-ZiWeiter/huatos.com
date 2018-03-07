import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SolutionService } from './solution.service';
import { NzMessageService } from 'ng-zorro-antd';
import { PulService } from './pul.service';

@Component({
  selector: 'huato-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.sass'],
  providers: [NzMessageService]
})
export class SolutionComponent implements OnInit {
  public SolutionsCateList: any[] = [];

  constructor(
    private solutionService: SolutionService,
    private MessageService: NzMessageService,
    private pulService: PulService,
    private router: Router
  ) { }
  getSolutionsCate() {
    this.solutionService.getSolutionsList()
    .then(response => {
      if (response.success === false) { return; }
      if (response.data.length === 0) { this.SolutionsCateList = []; return; }
      this.SolutionsCateList = response.data;
      this.pulService.setSolutionsName(this.SolutionsCateList[0].DetailsType_Name);
    })
    .catch(err => {
      console.log(err);
      this.MessageService.error('服务器错误，请稍后再试！');
      return;
    });
  }
  getDetailsName(value) {
    this.pulService.setSolutionsName(value.DetailsType_Name);
  }
  ngOnInit() {
    this.getSolutionsCate();
  }

}

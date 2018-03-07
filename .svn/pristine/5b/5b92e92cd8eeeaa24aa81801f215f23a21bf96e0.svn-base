import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operating-news',
  templateUrl: './operating-news.component.html',
  styleUrls: ['./operating-news.component.sass']
})
export class OperatingNewsComponent implements OnInit {
  public cateOptions: any[];
  public cateValue: any[] = null;

  public RecommendOptions: any[];
  public RecommendValue: any[] = null;
  constructor() {
    this.cateOptions = [{ value: '1', label: '测试一', isLeaf: true }, { value: '2', label: '测试二', isLeaf: true }];
    this.RecommendOptions = [{ value: '1', label: '是', isLeaf: true }, { value: '0', label: '否', isLeaf: true }];
  }

  ngOnInit() {
  }
  _console(ev) {
    console.log(ev);
  }
  newNewsSubmit(ev) {
    console.log(ev);
  }
  InputContent(content: string) {
    console.log(content);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { SolutionsIntrotions } from '../../model/data.of.type.modle';
import { PulService } from '../../solution/pul.service';
@Component({
  selector: 'huato-constom-articles',
  templateUrl: './constom-articles.component.html',
  styleUrls: ['./constom-articles.component.sass']
})
export class ConstomArticlesComponent implements OnInit {
  @Input('contJson')
  set injson(value: object|any) {
    if (value === undefined || value === null) { return; }
    this.ARTICLE = value;
  }
  public ARTICLE: SolutionsIntrotions|any = {};
  constructor(
    public pulService: PulService
  ) { }

  ngOnInit() {
  }

}

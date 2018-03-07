import { Injectable } from '@angular/core';

@Injectable()
export class ListDataService {
  listdata: {
    title: string;
  };
  breadcrumb: object[] = [];
  getBreadcrumb() {
    return this.breadcrumb;
  }
  setBreadcrumb(value: object[]) {
    this.breadcrumb.push(...value);
  }
  init() {
    this.breadcrumb = [];
    this.listdata.title = null;
  }
}

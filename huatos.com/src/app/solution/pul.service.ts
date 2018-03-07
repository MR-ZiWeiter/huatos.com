import { Injectable } from '@angular/core';
@Injectable()
export class PulService {
  solutionsId: number;
  solutionsName: string;
  getSolutionsId() {
    return this.solutionsId;
  }
  getSolutionsName() {
    return this.getSolutionsName;
  }
  setSolutionsId(value: number) {
    this.solutionsId = value;
  }
  setSolutionsName(value: string) {
    this.solutionsName = value;
  }
  init() {
    this.solutionsId = null;
    this.solutionsName = null;
  }
}

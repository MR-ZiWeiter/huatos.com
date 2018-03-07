import { Injectable } from '@angular/core';
@Injectable()
export class PulService {
  id: number;
  getId = () => {
    return this.id;
  }
  setId = (params) => {
    this.id = params.id;
  }
  init = () => {
    this.id = null;
  }
}

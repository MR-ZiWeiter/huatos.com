import { Injectable } from '@angular/core';
import { DownloadTypeData } from './download.interface';

@Injectable()
export class PulService {
  dataId: number;
  dataTypeAll: DownloadTypeData|any;
  get_dataId() {
    return this.dataId;
  }
  set_dataId(value: number) {
    this.dataId = value;
  }
  get_typeDataAll() {
    return this.dataTypeAll;
  }
  set_typeDataAll(value: number) {
    this.dataTypeAll = value;
  }
  initdata() {
    this.dataId = null;
  }
  inittypedata() {
    this.dataTypeAll = null;
  }
}

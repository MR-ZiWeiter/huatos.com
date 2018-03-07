import { Injectable } from '@angular/core';
@Injectable()
export class PulService {
    public serviceTid: number;
    public serviceName: string;
    public ifChild: boolean;
    public isUpdata: boolean;
    public serviceCid: number;
    getPul () {
        return {
            serviceTid: this.serviceTid,
            serviceName: this.serviceName,
            serviceCid: this.serviceCid,
            ifChild: this.ifChild
        };
    }
    setPul (pul: object|any) {
        this.serviceTid = pul.Type_id;
        this.serviceName = pul.Type_Name;
        this.ifChild = pul.ifChild;
        this.isUpdata = true;
        this.serviceCid = pul.SmallType_ID;
    }
    init() {
        this.serviceTid = null;
        this.serviceName = null;
        this.ifChild = null;
        this.isUpdata = null;
        this.serviceCid = null;
    }
}

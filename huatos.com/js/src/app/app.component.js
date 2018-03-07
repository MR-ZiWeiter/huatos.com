var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var AppComponent = (function () {
    // Create an instance of the DataService through dependency injection
    function AppComponent() {
        // Access the Data Service's getUsers() method we defined
        this.title = '深圳市华图测控系统有限公司';
        this._isSpinning = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.title);
        this._isSpinning = false;
    };
    AppComponent = __decorate([
        Component({
            selector: 'huato-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.sass']
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };

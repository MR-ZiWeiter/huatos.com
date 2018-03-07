import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SerachInService } from './serach/serach.d.service';
@Component({
  selector: 'huato-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ SerachInService ]
})
export class AppComponent implements OnInit {
  title = '深圳市华图测控系统有限公司';
  _value = '';
  _isSpinning: boolean|any = true;
  users: Array<any>;
  // Create an instance of the DataService through dependency injection
  constructor(
    private router: Router,
    private serachInStr: SerachInService
  ) {

    // Access the Data Service's getUsers() method we defined

  }
  ngOnInit() {
    console.log(this.title);
    this._isSpinning = false;
  }
  onSearch(event: string): void {
    this.serachInStr.change.emit(event);
    this.router.navigate([{ outlets: { popup: ['serach'] } }]);
    const body = document.getElementsByTagName('body')[0];
      body.classList.add('active');   // add the class
  }
  openSerach() {
    this.router.navigate([{ outlets: { popup: ['serach'] } }]);
    const body = document.getElementsByTagName('body')[0];
      body.classList.add('active');   // add the class
  }
}

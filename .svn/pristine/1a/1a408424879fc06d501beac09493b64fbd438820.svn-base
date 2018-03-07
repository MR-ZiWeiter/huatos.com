import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from './../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  _submitForm() {
    this.server.login(this.validateForm.value);
    console.log(this.validateForm.value);
  }

  constructor(
    private fb: FormBuilder,
    private _route: Router,
    private server: AuthService
  ) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      passWord: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }
}

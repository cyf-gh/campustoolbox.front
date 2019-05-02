import { Router } from '@angular/router';
import { AccountService } from './../../../service/account/account.service';
import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public formModel: FormGroup;
  public keepLogin: boolean;

  constructor( private fb: FormBuilder, private http: HttpClient, private router: Router, private account: AccountService ) { 
    if ( account.isLogin() ) {
      this.router.navigateByUrl("/") 
    }
    this.keepLogin = false;
    this.formModel = this.fb.group ( {
      loginName:           ['', Validators.required],
      password:            ['', Validators.required],
      loginBy: [1],
      remember: [true]
    } );
  }

  ngOnInit() {
  }

  submitLogin() {
    for (const i in this.formModel.controls) {
      this.formModel.controls[i].markAsDirty();
      this.formModel.controls[i].updateValueAndValidity();
    }
    return this.account.Login( this.formModel, this.keepLogin );
  }
}

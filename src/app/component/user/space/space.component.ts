import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './../../../service/account/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/model/user.model';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.sass']
})
export class SpaceComponent implements OnInit {
  public formModel: FormGroup;
  public userInfo: UserInfo;

  constructor( private fb: FormBuilder, private router: Router, private accountService: AccountService) { 
    accountService.TryGetUserInfo().subscribe((res) => {
      this.userInfo =  JSON.parse(JSON.stringify(res));
      this.formModel = this.fb.group ( {
        nickName:      [this.userInfo.absVisiable.nickName, Validators.required]
      } );
    });
  }

  ngOnInit() {
  }

  submitModifyPrivateInfo() {
  }

  signout() {
    this.accountService.Logout();
  }

}

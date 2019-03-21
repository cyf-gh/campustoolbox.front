import { Component, OnInit } from '@angular/core';
import { UserInfo } from './model/user.model';
import { AccountService } from './service/account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLogin: boolean;
  public userInfo: UserInfo;

  constructor( private accountService : AccountService ) {
    this.isLogin = accountService.isLogin();
    this.userInfo = accountService.TryGetUserInfo();
  }

  ngOnInit(): void {

  }
  title = 'CampusToolbox';
}

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
    if ( this.isLogin ) {
      accountService.TryGetUserInfo().subscribe((res: JSON) => {
        this.userInfo =  JSON.parse(JSON.stringify(res));
        if ( this.userInfo == null ) {
          alert("令牌已过期，请重新登陆");
          this.accountService.Logout();
        }
      });
    }
  }

  ngOnInit(): void {

  }
  title = 'CampusToolbox';
}

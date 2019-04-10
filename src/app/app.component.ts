import { Component, OnInit } from '@angular/core';
import { UserInfo, AbsVisiable } from './model/user.model';
import { AccountService } from './service/account/account.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLogin: boolean;
  public userInfo: UserInfo;

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  constructor( private accountService: AccountService, private sanitizer: DomSanitizer ) {
    this.isLogin = accountService.isLogin();
    if ( this.isLogin ) {
      accountService.TryGetUserInfo().subscribe((res) => {
          this.userInfo =  JSON.parse(JSON.stringify(res));
          if ( JSON.stringify(res).includes("-99998") ) {
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

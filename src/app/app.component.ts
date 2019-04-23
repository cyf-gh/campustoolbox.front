import { Component, OnInit } from '@angular/core';
import { UserInfo, AbsVisiable } from './model/user.model';
import { AccountService } from './service/account/account.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CookiePolicyConfirmService } from './service/cookie-policy-confirm/cookie-policy-confirm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLogin: boolean;
  public userInfo: UserInfo;

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  constructor( private accountService: AccountService, private sanitizer: DomSanitizer, private cpService: CookiePolicyConfirmService ) {
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

  confirmCookiePolicy() {
    this.cpService.setConfirmedUsingCookie();
  }
  
  ngOnInit(): void {

  }
  title = 'CampusToolbox';
}

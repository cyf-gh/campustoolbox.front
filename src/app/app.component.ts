import { Component, OnInit } from '@angular/core';
import { UserInfo } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLogin: boolean;
  public userInfo: UserInfo;
  ngOnInit(): void {
    let userInfoStr: string = localStorage.getItem("userinfo");
    if ( userInfoStr === null ) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
    this.userInfo = JSON.parse( userInfoStr );
  }
  title = 'CampusToolbox';
}

import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/model/user.model';
import { FormGroup } from '_@angular_forms@7.2.9@@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '_@angular_router@7.2.9@@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  userInfoKeyName: string = "userinfo";

  public Login( formModel: FormGroup, keepLogin: boolean ) {
    if ( !formModel.valid ) {
      return false;
    }
    let loginName: string = formModel.get('loginName').value;
    let loginBy: number = -1;

    if ( environment.regx_email.test( loginName ) ) {
      loginBy = 0;
    } else if ( environment.regx_email.test( loginName ) ) {
      loginBy = 1;
    } else {
      alert("输入的既不是邮箱也不是手机号");
      return false;
    }
    formModel.patchValue( { login: loginBy } );

    this.http.post(environment.apiLogin,
    JSON.stringify(formModel.value),).subscribe((res: JSON) => { 
      if ( res.toString() !== "" ) {
        if ( keepLogin ) {
          localStorage.setItem( this.userInfoKeyName, JSON.stringify( res ) );
        } else {
          sessionStorage.setItem( this.userInfoKeyName, JSON.stringify( res ) );
        }
        alert("登陆成功");
        window.location.reload();
        this.router.navigateByUrl("/") 
      } else {
        alert("账户或密码有误");
      }
    });
    return false;
  }

  public Logout() {
    localStorage.removeItem( this.userInfoKeyName );
    sessionStorage.removeItem( this.userInfoKeyName );
    window.location.reload();
    this.router.navigateByUrl("/");    
  }

  public isLogin() : boolean {
    return !! this.getUserInfoTemp() || !! this.getUserInfoPerm();
  }

  public TryGetUserInfo() : UserInfo {
    if ( this.isLogin() ) {
      let userInfo : UserInfo = this.GetUserInfoTemp();
      if( userInfo === null ) {
        userInfo = this.GetUserInfoPerm();
      }
      return userInfo;
    }
  }

  public GetUserInfoPerm() : UserInfo {
    return JSON.parse( this.getUserInfoPerm() );
  }

  public GetUserInfoTemp() : UserInfo {
    return JSON.parse( this.getUserInfoTemp() );
  }


  private getUserInfoPerm() : string {
    return localStorage.getItem(this.userInfoKeyName);
  }

  private getUserInfoTemp() : string {
    return sessionStorage.getItem(this.userInfoKeyName);
  }
  constructor( private http: HttpClient, private router: Router ) { }
}

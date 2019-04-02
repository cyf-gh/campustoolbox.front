import { Token } from './../../model/token.model';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public Login(formModel: FormGroup, keepLogin: boolean) {
    if (!formModel.valid) {
      return false;
    }
    let loginName: string = formModel.get('loginName').value;
    let loginBy: number = -1;

    if (environment.regx_email.test(loginName)) {
      loginBy = 0;
    } else if (environment.regx_email.test(loginName)) {
      loginBy = 1;
    } else {
      alert("输入的既不是邮箱也不是手机号");
      return false;
    }
    formModel.patchValue({ login: loginBy });

    this.http.post(environment.apiLogin,
      JSON.stringify(formModel.value), environment.httpOptions ).subscribe((res ) => {
        if ( !JSON.stringify(res).includes("-99995") ) {
          if ( keepLogin ) {
            this.tokenService.SaveLocal(res);
          } else {
            this.tokenService.SaveSession(res);
          }
          alert("登陆成功");
          window.location.reload();
          this.router.navigateByUrl("/")
        } else {
          alert("账户或密码有误");
        }
      } );
    return false;
  }

  public Logout() {
    this.tokenService.DeleteToken();
    this.router.navigateByUrl("/");
    window.location.reload();
  }

  public isLogin(): boolean {
    return this.tokenService.IsTokenExsit();
  }

  public TryGetUserInfo(): Observable<Object> {
    return this.http.get( environment.apiReflectAccountByToken, environment.httpOptions );
  }

  public GetProvinces(): Observable<Object> {
    return this.http.get( environment.apiGetStaticDataProvinces, environment.httpOptions );
  }

  public GetAreas(): Observable<Object> {
    return this.http.get( environment.apiGetStaticDataAreas, environment.httpOptions );
  }

  public GetColleges(): Observable<object> {
    return this.http.get( environment.apiGetStaticColleges, environment.httpOptions );
  }

  constructor(private http: HttpClient, private router: Router, private tokenService: TokenService) { }
}

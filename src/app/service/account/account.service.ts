import { Observable } from 'rxjs';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/model/user.model';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private httpOptions = {
    withCredentials: true
  };
  
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
      JSON.stringify(formModel.value), this.httpOptions ).subscribe((res: JSON) => {
        if (res.toString() !== "") {
          if (keepLogin) {
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
    window.location.reload();
    this.router.navigateByUrl("/");
  }

  public isLogin(): boolean {
    return !!this.tokenService.TryGetLocalToken();
  }

  public TryGetUserInfo(): Observable<Object> {
    return this.http.post(environment.apiReflectAccountByToken, JSON.stringify(this.tokenService.TryGetLocalToken()));
  }

  constructor(private http: HttpClient, private router: Router, private tokenService: TokenService) { }
}

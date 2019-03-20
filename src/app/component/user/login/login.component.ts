import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '_@angular_forms@7.2.9@@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '_@angular_router@7.2.9@@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public formModel: FormGroup;
  public keepLogin: boolean;
  constructor( private fb: FormBuilder, private http: HttpClient, private router: Router ) { 
    this.keepLogin = false;
    this.formModel = this.fb.group ( {
      loginName:           ['', Validators.required],
      password:            ['', Validators.required],
      loginBy: [1]
    } );
  }

  isVailEmail (input:string){
    var reEmail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return reEmail.test(input);
  }
  isValiPhone(input){
      var rePhone = /^([1][3,4,5,6,7,8,9])\d{9}$/;
      return rePhone.test(input);
  }

  ngOnInit() {
  }

  submitLogin() {
    if ( !this.formModel.valid ) {
      return false;
    }
    let loginName: string = this.formModel.get('loginName').value;
    let loginBy: number = -1;

    if ( this.isValiPhone( loginName ) ) {
      loginBy = 0;
    } else if ( this.isVailEmail( loginName) ) {
      loginBy = 1;
    } else {
      alert("输入的既不是邮箱也不是手机号");
      return false;
    }
    this.formModel.patchValue( { login: loginBy } );


    this.http.post('http://192.168.8.104:5000/api/account/login',
    JSON.stringify(this.formModel.value),).subscribe((res: JSON) => { 
      if ( res.toString() !== "" ) {
        if ( this.keepLogin ) {
          localStorage.setItem( "userinfo", JSON.stringify( res ) );
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
}

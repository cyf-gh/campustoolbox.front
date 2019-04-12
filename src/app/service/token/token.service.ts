import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Token, TokenImplement } from './../../model/token.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  public tokenKeyName: string = "token";

  constructor(private cookieService: CookieService) { }

  public TryGetLocalToken(): Token {
    let token: Token = new TokenImplement();
    token.token = this.cookieService.get(this.tokenKeyName);
    return token;
  }

  public IsTokenExsit(): boolean {
    return this.cookieService.check(this.tokenKeyName);
  }
  public SaveLocal(token) {
    let _token: Token = JSON.parse( JSON.stringify( token) );
    this.cookieService.set(this.tokenKeyName, _token.token, 365, '/');
  }

  public SaveSession(token) {
    let _token: Token = JSON.parse( JSON.stringify( token) );
    this.cookieService.set( this.tokenKeyName, _token.token, 0, '/' );
  }

  public DeleteToken() {
    this.cookieService.deleteAll();
    this.cookieService.delete( this.tokenKeyName, '/' );
  }

}

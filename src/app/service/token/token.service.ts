import { Token } from './../../model/token.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  public tokenKeyName: string = "token";

  constructor() { }

  public TryGetLocalToken() : Token {
      let token : Token = JSON.parse( sessionStorage.getItem(this.tokenKeyName) );
      if( token === null ) {
        token = JSON.parse( localStorage.getItem(this.tokenKeyName) );
      }
      return token;
  }

  public SaveLocal( token: JSON ) {
    localStorage.setItem( this.tokenKeyName, JSON.stringify( token ) );
  }

  public SaveSession( token: JSON ) {
    sessionStorage.setItem( this.tokenKeyName, JSON.stringify( token ) );
  }

  public DeleteToken() {
    localStorage.removeItem( this.tokenKeyName );
    sessionStorage.removeItem( this.tokenKeyName );
  }
  
}

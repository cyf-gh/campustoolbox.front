import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiePolicyConfirmService {

  constructor() { }

  confirmedUsingCookieName = "__cp__";
  yes = "YES";
  public confirmedUsingCookie() {
    return localStorage.getItem(this.confirmedUsingCookieName) === this.yes;
  }
  public setConfirmedUsingCookie() {
    localStorage.setItem(this.confirmedUsingCookieName, this.yes);
  }
}

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoodService {

  constructor( private http: HttpClient ) { }

  public GetSuppliesByCurrentUser() {
    return this.http.get( environment.apiGetSupplies, environment.httpOptions );
  }

  public GetDemandsByCurrentUser() {
    return this.http.get( environment.apiGetDemands, environment.httpOptions );
  }
}

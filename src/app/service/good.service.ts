import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ppDemandWithId, ppSupplyWithId } from '../model/good.model';

@Injectable({
  providedIn: 'root'
})
export class GoodService {
  public demand: ppDemandWithId;
  public supply: ppSupplyWithId;

  constructor( private http: HttpClient ) { }

  public GetSuppliesByCurrentUser() {
    return this.http.get( environment.apiGetSupplies, environment.httpOptions );
  }

  public GetSuppliesCurrentUserOwns() {
    return this.http.get( environment.apiGetOwnSupplies, environment.httpOptions );  
  }

  public GetDemandsCurrentUserOwns() {
    return this.http.get( environment.apiGetOwnDemands, environment.httpOptions );  
  }
  public GetDemandsByCurrentUser() {
    return this.http.get( environment.apiGetDemands, environment.httpOptions );
  }

  public DeleteSupply( id ) {
    return this.http.get( environment.apiDeleteSupply + '?id=' + id.toString(), environment.httpOptions );
  }
  public DeleteDemand( id ) {
    return this.http.get( environment.apiDeleteDemand + '?id=' + id.toString(), environment.httpOptions );
  }
}

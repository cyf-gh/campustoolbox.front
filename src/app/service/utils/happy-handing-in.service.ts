import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class HappyHandingInService { 
  constructor(private http: HttpClient) {
  }

  public async getWorkListAsync(): Promise<HappyHandingInModel.WorkModel[]> {
    return this.http.get<HappyHandingInModel.WorkModel[]>('https://localhost:5001/api/utils/hhi/get-list').toPromise();
  }

  public async getPrefixsAsync(): Promise<HappyHandingInModel.PrefixModel[]> {
    const api = 'https://localhost:5001/api/utils/hhi/admin/get-prefixs';
    return await this.http.get<HappyHandingInModel.PrefixModel[]>(api).toPromise();
  }
}

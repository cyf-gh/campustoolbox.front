import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HappyHandingInService { 
  constructor(private http: HttpClient) {
  }

  public async getWorkListAsync(): Promise<PPHappyHandingInModel.WorkModel[]> {
    return this.http.get<PPHappyHandingInModel.WorkModel[]>('https://localhost:5001/api/utils/hhi/get-works').toPromise();
  }

  public async getPrefixsAsync(): Promise<PPHappyHandingInModel.PrefixModel[]> {
    const api = 'https://localhost:5001/api/utils/hhi/admin/get-prefixs';
    return await this.http.get<PPHappyHandingInModel.PrefixModel[]>(api).toPromise();
  }
}

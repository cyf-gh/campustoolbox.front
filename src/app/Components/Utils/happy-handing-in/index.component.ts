import { Component, OnInit } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { HappyHandingInWorkModel } from 'src/app/Models/Utils/happy-handing-in-model';

@Component({
  selector: 'app-happy-handing-in',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class HappyHandingInComponent implements OnInit {
  public _works:HappyHandingInWorkModel[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    // TODO: Check if login

    // TODO: Move to service
    this.http.get<HappyHandingInWorkModel[]>('https://localhost:5001/api/utils/hhi/get-list').subscribe( works=>{
      this._works = works;
      console.log(this._works);
    });
  
  }

}

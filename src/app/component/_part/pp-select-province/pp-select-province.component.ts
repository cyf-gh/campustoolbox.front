import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account/account.service';
import { ppCollege } from 'src/app/model/static-data/province.model';

@Component({
  selector: 'app-pp-select-province',
  templateUrl: './pp-select-province.component.html',
  styleUrls: ['./pp-select-province.component.sass']
})
export class PpSelectProvinceComponent implements OnInit {
  allColleges: ppCollege[];
  
  constructor( private accountServices: AccountService ) { 
    accountServices.GetColleges().subscribe( ( res ) => {
      this.allColleges = JSON.parse( JSON.stringify( res ) );
      this.allColleges.sort((a, b) => a.name.localeCompare(b.name, 'zh-Hans-CN', {sensitivity: 'accent'}));
    });
  }

  getAllColleges() : ppCollege[] {
    return this.allColleges;
  }

  ngOnInit() {
  }

}

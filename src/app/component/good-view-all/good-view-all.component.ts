import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ppDemand, ppSupply } from 'src/app/model/good.model';
import { GoodService } from 'src/app/service/good.service';

@Component({
  selector: 'app-good-view-all',
  templateUrl: './good-view-all.component.html',
  styleUrls: ['./good-view-all.component.sass']
})
export class GoodViewAllComponent implements OnInit {

  demands: ppDemand[];
  supplies: ppSupply[];

  constructor( private goodService: GoodService, private router: Router ) {
    this.goodService.GetDemandsByCurrentUser().subscribe((res) => {
      this.demands = JSON.parse(JSON.stringify(res));
      if ( this.demands === undefined ) {
        alert('nothing fetched');
      }
    });
    this.goodService.GetSuppliesByCurrentUser().subscribe((res) => {
      this.supplies = JSON.parse(JSON.stringify(res));
      if ( this.supplies === undefined ) {
        alert('nothing fetched');
      }
    });
  }
  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }
  public sortByDate() {
    this.demands.sort( ( a: ppDemand, b: ppDemand ) => {
      return this.getTime(a.base.publishDate) - this.getTime(b.base.publishDate);
    });
  }

  ngOnInit() {
  }

}

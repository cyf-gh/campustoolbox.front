import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GoodService } from 'src/app/service/good.service';
import { ppDemand } from 'src/app/model/good.model';

@Component({
  selector: 'app-good-demand-index',
  templateUrl: './good-demand-index.component.html',
  styleUrls: ['./good-demand-index.component.sass']
})
export class GoodDemandIndexComponent implements OnInit {
  demands: ppDemand[];

  constructor( private goodService: GoodService, private router: Router ) {
    this.goodService.GetDemandsByCurrentUser().subscribe((res) => {
      this.demands = JSON.parse(JSON.stringify(res));
      if ( this.demands
     === undefined ) {
        alert('nothing fetched');
      }
    });
  }
  ngOnInit() {
  }
}

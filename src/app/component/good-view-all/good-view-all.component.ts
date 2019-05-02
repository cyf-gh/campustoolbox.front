import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ppDemand, ppSupply } from 'src/app/model/good.model';
import { GoodService } from 'src/app/service/good.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-good-view-all',
  templateUrl: './good-view-all.component.html',
  styleUrls: ['./good-view-all.component.css']
})
export class GoodViewAllComponent implements OnInit {

  demands: ppDemand[];
  supplies: ppSupply[];

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  constructor(private goodService: GoodService, private router: Router, private sanitizer: DomSanitizer) {
    this.goodService.GetDemandsByCurrentUser().subscribe((res) => {
      this.demands = JSON.parse(JSON.stringify(res));
      if (this.demands === undefined) {
        alert('nothing fetched');
      }
    });
    this.goodService.GetSuppliesByCurrentUser().subscribe((res) => {
      this.supplies = JSON.parse(JSON.stringify(res));
      if (this.supplies === undefined) {
        alert('nothing fetched');
      }
    });
  }
  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }
  
  public sortByDate() {
    this.demands.sort((a: ppDemand, b: ppDemand) => {
      return this.getTime(a.base.publishDate) - this.getTime(b.base.publishDate);
    });
  }

  ngOnInit() {
  }

}

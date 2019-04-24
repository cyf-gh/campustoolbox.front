import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { GoodService } from 'src/app/service/good.service';
import { ppDemand, ppSupply, ppDemandWithId, ppSupplyWithId } from 'src/app/model/good.model';

@Component({
  selector: 'app-own-goods',
  templateUrl: './own-goods.component.html',
  styleUrls: ['./own-goods.component.css']
})
export class OwnGoodsComponent implements OnInit {
  demands: ppDemandWithId[];
  supplies: ppSupplyWithId[];
  
  constructor(private goodService: GoodService, private router: Router, private sanitizer: DomSanitizer) { 
    this.goodService.GetDemandsCurrentUserOwns().subscribe((res) => {
      this.demands = JSON.parse(JSON.stringify(res));
      if (this.demands === undefined) {
        alert('nothing fetched');
      }
    });
    this.goodService.GetSuppliesCurrentUserOwns().subscribe((res) => {
      this.supplies = JSON.parse(JSON.stringify(res));
      if (this.supplies === undefined) {
        alert('nothing fetched');
      }
    });
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  ngOnInit() {
  }

  selectDemand(de) {
    this.goodService.demand = de;
  }
  removeDemand(de: ppDemandWithId) {
    this.goodService.DeleteDemand(de.id).subscribe((res) => {
        location.reload();
      }
    );
  }

  selectSupply(su) {
    this.goodService.supply = su;
  }
  removeSupply(su: ppSupplyWithId) {
    this.goodService.DeleteSupply(su.id).subscribe((res) => {
        location.reload();
      }
    );
  }
}

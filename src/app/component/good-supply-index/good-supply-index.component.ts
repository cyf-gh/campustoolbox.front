import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GoodService } from 'src/app/service/good.service';
import { ppSupply } from 'src/app/model/good.model';

@Component({
  selector: 'app-good-supply-index',
  templateUrl: './good-supply-index.component.html',
  styleUrls: ['./good-supply-index.component.sass']
})
export class GoodSupplyIndexComponent implements OnInit {
  supplies: ppSupply[];

  constructor( private goodService: GoodService, private router: Router ) { 

  }
  ngOnInit() {
  }

}

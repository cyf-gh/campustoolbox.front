import { Router } from '@angular/router';
import { GoodService } from './../../service/good.service';
import { Component, OnInit } from '@angular/core';
import { ppSupply } from 'src/app/model/good.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  ngOnInit() {
  }
}

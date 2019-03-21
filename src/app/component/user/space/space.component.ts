import { AccountService } from './../../../service/account/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.sass']
})
export class SpaceComponent implements OnInit {

  constructor(private router: Router, private account: AccountService) { }

  ngOnInit() {
  }

  signout() {
    this.account.Logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.sass']
})
export class SpaceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signout() {
    localStorage.removeItem("userinfo");
    window.location.reload();
    this.router.navigateByUrl("/");
  }

}

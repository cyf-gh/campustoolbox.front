import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  names: Array<string>;

  constructor() { 
    
    this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }

  ngOnInit() {
  }

}

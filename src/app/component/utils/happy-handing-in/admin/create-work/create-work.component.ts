import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-work',
  templateUrl: './create-work.component.html',
  styleUrls: ['./create-work.component.scss']
})
export class CreateWorkComponent implements OnInit {

  public deadLine: Date;
  public description: string;
  public isSubItemImage: boolean;
  public name: string;
  public prefixName: string;
  public prefixs: PPHappyHandingInModel.PrefixModel[];

  constructor() { }

  ngOnInit() {
  }

}

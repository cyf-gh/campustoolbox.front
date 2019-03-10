import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hhi-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class HappyHandingInUploadImageComponent implements OnInit {

  @Input() imageIndex : number;
  @Input() imageType : string;
  @Input() imageQuality : any;
  @Input() imageSource : any;

  constructor() { }


  ngOnInit() {
  }

}

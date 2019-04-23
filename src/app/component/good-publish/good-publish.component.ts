import { UserInfo } from 'src/app/model/user.model';
import { AccountService } from './../../service/account/account.service';
import { ppBase, ppDemand, ppDemandPublishModel } from './../../model/good.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ImageService } from 'src/app/service/image/image.service';

@Component({
  selector: 'app-good-publish',
  templateUrl: './good-publish.component.html',
  styleUrls: ['./good-publish.component.css']
})
export class GoodPublishComponent implements OnInit {
  public formModel: FormGroup;
  public isLogin: boolean;
  public publishItemGenre: string;
  public userInfo: UserInfo;
  public images: any[] = [];

  constructor(
    private fb: FormBuilder,
    private account: AccountService,
    private imageService: ImageService
    ) {
    this.formModel = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      tag: ['', Validators.required],
      accecptablePriceMax: ['', Validators.required],
      accecptablePriceMin: ['', Validators.required]
    });
    this.publishItemGenre = 'supply';
  }

  ngOnInit() {

  }
  addImage() {
    this.imageService.ppAddCompressedImage( 0.7, 'image/jpeg', this.images );
  }
  removeImage( key ) {
    this.images.splice( key, 1 );
  }

  removeAll() {
    this.images = [];
  }
  submitDemandOrSupply() {

    if (this.publishItemGenre === 'demand') {
      let tbase: ppBase = this.formModel.value;
      let demand2: ppDemandPublishModel = this.formModel.value;
      const demand: ppDemandPublishModel = {
        base : tbase,
        accecptablePriceMax: demand2.accecptablePriceMax,
        accecptablePriceMin: demand2.accecptablePriceMin
      };
      console.log(demand);
    }
    return false;
  }

}

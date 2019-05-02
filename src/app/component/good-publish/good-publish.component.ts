import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from 'src/app/model/user.model';
import { AccountService } from './../../service/account/account.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image/image.service';
import { environment } from 'src/environments/environment';
import { GoodService } from 'src/app/service/good.service';

@Component({
  selector: 'app-good-publish',
  templateUrl: './good-publish.component.html',
  styleUrls: ['./good-publish.component.css']
})
export class GoodPublishComponent implements OnInit {

  isEdit: boolean;
  id: number;

  public formModel: FormGroup;
  public isLogin: boolean;
  public publishItemGenre: string;
  public userInfo: UserInfo;
  public images: any[] = [];

  constructor(
    private fb: FormBuilder,
    private account: AccountService,
    private imageService: ImageService,
    private http: HttpClient,
    private routeInfo: ActivatedRoute,
    private goodService: GoodService
    ) {

    this.isEdit = this.routeInfo.snapshot.queryParams['edit'];
    this.id = this.routeInfo.snapshot.queryParams['id'];
    this.publishItemGenre = this.routeInfo.snapshot.queryParams['genre'];
    
    if( !this.isEdit ) {
      this.formModel = this.fb.group({
        id: ['0', Validators.required],
        name: ['', Validators.required],
        desc: ['', Validators.required],
        tag: ['', Validators.required],
        images: ['', Validators.required],
        priceMax: ['', Validators.required],
        priceMin: ['', Validators.required]
      });
      this.publishItemGenre = 'supply';
    } else { // 编辑模式
      if (this.publishItemGenre === 'demand') {
        this.formModel = this.fb.group({
          id: [this.goodService.demand.id, Validators.required],
          name: [this.goodService.demand.base.name, Validators.required],
          desc: [this.goodService.demand.base.desc, Validators.required],
          tag: [this.goodService.demand.base.tag, Validators.required],
          images: ['', Validators.required],
          priceMax: [this.goodService.demand.priceMax, Validators.required],
          priceMin: [this.goodService.demand.priceMin, Validators.required]
        });
      } else if ( this.publishItemGenre === 'supply' ) {
        this.formModel = this.fb.group({
          id: [this.goodService.supply.id, Validators.required],
          name: [this.goodService.supply.base.name, Validators.required],
          desc: [this.goodService.supply.base.desc, Validators.required],
          tag: [this.goodService.supply.base.tag, Validators.required],
          images: ['', Validators.required],
          priceMax: [this.goodService.supply.priceMax, Validators.required],
          priceMin: [this.goodService.supply.priceMin, Validators.required]
        });
        this.images = this.goodService.supply.images;
      }
    }
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
      if ( this.isEdit ) {
        this.http.post(environment.apiModifyDemand,
          JSON.stringify(this.formModel.value), environment.httpOptions ).subscribe((res ) => {} );
      } else {
        this.http.post(environment.apiPublishDemand,
          JSON.stringify(this.formModel.value), environment.httpOptions ).subscribe((res ) => {} );
      }
    } else if ( this.publishItemGenre === 'supply' ) {
      this.formModel.controls['images'].setValue(this.images);
      if ( this.isEdit ) {
        this.http.post(environment.apiModifySupply,
          JSON.stringify(this.formModel.value), environment.httpOptions ).subscribe((res ) => {} );
      } else {
        this.http.post(environment.apiPublishSupply,
          JSON.stringify(this.formModel.value), environment.httpOptions ).subscribe((res ) => {} );
      }
    }
    return false;
  }

}

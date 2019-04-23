import { ImageService } from './../../../../service/image/image.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  HttpClient, HttpHeaders
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-happy-handing-in-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class HappyHandingInUploadComponent implements OnInit {

  public workId: number;
  public workName: string;

  public imageQuality: any = '0.8';
  public imageType: string = 'image/jpeg';
  public images: any[] = [];

  public inputValue: string[];

  constructor(private routeInfo: ActivatedRoute, private http: HttpClient, private imageService: ImageService) { }

  ngOnInit() {
    this.workId = this.routeInfo.snapshot.queryParams['id'];
    this.workName = this.routeInfo.snapshot.queryParams['name'];
    this.http.post(environment.apiUtilsHHIGetImages,
      {
        "taskModel": 0
      }
    ).subscribe((res) => {
      let uploaded: PPHappyHandingInModel.GetUploadedImagesModel = JSON.parse( JSON.stringify(res) );
      this.images = uploaded.images;
    });
    // load uploaded images
  }

  addImage() {
    this.imageService.ppAddCompressedImage( this.imageQuality, this.imageType, this.images );
  }

  doUpload() {
    if (this.images.length == 0) {
      alert("请至少添加一张照片");
      return;
    }
    var formData = new FormData();
    formData.append("imageCount", this.images.length.toString());
    for (let i = 0; i < this.images.length; ++i) {
      formData.append(i.toString(), this.images[i]);
    }

    if (window.confirm('请确保正在提交的作业和需要提交的照片\n确认开始提交？')) {
      this.http.post(environment.apiUtilsHHIUploadImages,
        {
          "images": this.images,
          "taskId": 0
        }, environment.httpOptions
      ).subscribe((res: Response) => { });
    } else {
      return;
    }
  }

  removeImage( key ) {
    this.images.splice( key, 1 );
  }

  removeAll() {
    this.images = [];
  }
}

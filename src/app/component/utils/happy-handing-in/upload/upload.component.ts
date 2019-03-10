import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  HttpClient, HttpHeaders
} from '@angular/common/http';

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

  constructor(private routeInfo: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.workId = this.routeInfo.snapshot.queryParams['id'];
    this.workName = this.routeInfo.snapshot.queryParams['name'];
  }

  addImage() {
    let imageQuality = this.imageQuality;
    let imageType = this.imageType;
    let images = this.images;

    var uploadImage: any = document.getElementById("picker");
    //check and return the length of uploaded file.
    if (uploadImage.files.length === 0) {
      return;
    }
    for (var i = 0; i < uploadImage.files.length; i++) {
      //Is Used for validate a valid file.
      var filterType = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
      var uploadFile = uploadImage.files[i];
      if (!filterType.test(uploadFile.type)) {
        alert("请选择一张图片文件");
        return;
      }

      var fileReader = new FileReader();
      fileReader.onload = function (event) {
        var image = new Image();
        image.onload = function () {
          var max = image.width > image.height ? image.width : image.height;
          var a = max / 1000;
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");
          canvas.width = image.width / a;
          canvas.height = image.height / a;
          context.drawImage(image,
            0,
            0,
            image.width,
            image.height,
            0,
            0,
            canvas.width,
            canvas.height
          );

          images.push(canvas.toDataURL(imageType, imageQuality));
        }
        image.src = (event.target as any).result;
      };
      fileReader.readAsDataURL(uploadFile);
    }

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
      this.http.post('https://localhost:5001/api/utils/hhi/upload-images',
        formData,
      ).subscribe((res: Response) => { });
    } else {
      return;
    }
  }

  removeImage(key) {
    this.images.splice(key, 1)
  }

  removeAll() {
    this.images = [];
  }
}

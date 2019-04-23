import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public ppAddCompressedImage(imageQuality, imageType, images) {
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
        };
        image.src = (event.target as any).result;
      };
      fileReader.readAsDataURL(uploadFile);
    }

  }
  constructor() { }
}

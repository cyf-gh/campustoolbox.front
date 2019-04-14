import { UploadInfo } from './../../../model/user.model';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './../../../service/account/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/model/user.model';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.sass']
})
export class SpaceComponent implements OnInit {
  public formModel: FormGroup;
  public userInfo: UserInfo;

  public modified: boolean;

  public orgUserInfo: UserInfo;

  uploadProfilePicture() {
    var uploadImage: any = document.getElementById("profile_picture_picker");
    //Is Used for validate a valid file.
    var filterType = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
    var uploadFile = uploadImage.files[0];
    if (!filterType.test(uploadFile.type)) {
      alert("请选择一张图片文件");
      return;
    }
    var _this = this;
    var hp = this.userInfo.absVisiable.hp;
    var fileReader = new FileReader();
    fileReader.onload = function (event) {
      var image = new Image();
      image.onload = function () {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = 100;
        canvas.height = 100;
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
        _this.userInfo.absVisiable.hp = (canvas.toDataURL('image/jpeg', 0.7));
      };
      image.src = (event.target as any).result;
    };
    fileReader.readAsDataURL(uploadFile);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private sanitizer: DomSanitizer
  ) {
    this.modified = false;
    accountService.TryGetUserInfo().subscribe((res) => {
      this.userInfo = JSON.parse(JSON.stringify(res));
      this.formModel = this.fb.group({
        nickName: [this.userInfo.absVisiable.nickName, Validators.required]
      });
      Object.assign( this.orgUserInfo, this.userInfo );
    });
  }

  ngOnInit() {
  }

  submitModifyPrivateInfo() {
    if ( JSON.stringify( this.orgUserInfo ) !== JSON.stringify( this.userInfo ) ) {
      let info: UploadInfo = {
        hp: this.userInfo.absVisiable.hp,
        name: this.formModel.get('nickName').value
      };
      this.accountService.UploadProfileInfo( info );
    } else {
      alert("没有修改信息");
    }
  }

  signout() {
    this.accountService.Logout();
  }

}

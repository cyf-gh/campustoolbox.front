import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HappyHandingInComponent } from './component/utils/happy-handing-in/index.component';
import { HappyHandingInUploadComponent } from './component/utils/happy-handing-in/upload/upload.component';
import { HappyHandingInUploadImageComponent } from './component/utils/happy-handing-in/upload/image/image.component';
import { UtilsComponent } from './component/utils/utils.component';
import { CreateWorkComponent } from './component/utils/happy-handing-in/admin/create-work/create-work.component';
import { CreatePrefixComponent } from './component/utils/happy-handing-in/admin/create-prefix/create-prefix.component';
import { HhiAdminComponent } from './component/utils/happy-handing-in/admin/hhi-admin/hhi-admin.component';
import { HHIEditComponent } from './component/utils/happy-handing-in/admin/edit/edit.component';
import { RegisterComponent } from './component/user/register/register.component';
import { LoginComponent } from './component/user/login/login.component';
import { SpaceComponent } from './component/user/space/space.component';
import { IndexComponent } from './component/index/index.component';
import { GoodViewAllComponent } from './component/good-view-all/good-view-all.component';
import { CookiePolicyDetailsComponent } from './component/cookie-policy-details/cookie-policy-details.component';
import { GoodViewDetailComponent } from './component/good-view-detail/good-view-detail.component';
import { GoodPublishComponent } from './component/good-publish/good-publish.component';
import { OwnGoodsComponent } from './component/user/own-goods/own-goods.component';
import { PpSelectProvinceComponent } from './component/_part/pp-select-province/pp-select-province.component';


@NgModule({
  declarations: [
    AppComponent,
    HappyHandingInComponent,
    HappyHandingInUploadComponent,
    HappyHandingInUploadImageComponent,
    UtilsComponent,
    CreateWorkComponent,
    CreatePrefixComponent,
    HhiAdminComponent,
    HHIEditComponent,
    RegisterComponent,
    LoginComponent,
    SpaceComponent,
    IndexComponent,
    GoodViewAllComponent,
    CookiePolicyDetailsComponent,
    GoodViewDetailComponent,
    GoodPublishComponent,
    OwnGoodsComponent,
    PpSelectProvinceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

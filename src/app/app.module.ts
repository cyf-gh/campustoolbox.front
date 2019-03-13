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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HappyHandingInComponent } from './components/utils/happy-handing-in/index.component';
import { HappyHandingInUploadComponent } from './components/utils/happy-handing-in/upload/upload.component';
import { HappyHandingInUploadImageComponent } from './components/utils/happy-handing-in/upload/image/image.component';
import { UtilsComponent } from './components/utils/utils.component';

@NgModule({
  declarations: [
    AppComponent,
    HappyHandingInComponent,
    HappyHandingInUploadComponent,
    HappyHandingInUploadImageComponent,
    UtilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

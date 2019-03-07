import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HappyHandingInComponent } from './Components/Utils/happy-handing-in/index.component';
import { HappyHandingInUploadComponent } from './Components/Utils/happy-handing-in/upload/upload.component';
import { HappyHandingInUploadImageComponent } from './Components/Utils/happy-handing-in/upload/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HappyHandingInComponent,
    HappyHandingInUploadComponent,
    HappyHandingInUploadImageComponent
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

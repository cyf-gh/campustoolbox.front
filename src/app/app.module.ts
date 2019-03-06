import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HappyHandingInComponent } from './Components/Utils/happy-handing-in/happy-handing-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HappyHandingInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

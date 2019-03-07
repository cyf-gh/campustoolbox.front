import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HappyHandingInComponent } from './Components/Utils/happy-handing-in/index.component';
import { HappyHandingInUploadComponent } from './Components/Utils/happy-handing-in/upload/upload.component';

const routes: Routes = [
  { path: 'utils/happy-handing-in', component: HappyHandingInComponent },
  { path: 'utils/happy-handing-in/upload', component: HappyHandingInUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

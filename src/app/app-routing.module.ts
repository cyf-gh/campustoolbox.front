import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HappyHandingInComponent } from './Components/Utils/happy-handing-in/index.component';
import { HappyHandingInUploadComponent } from './Components/Utils/happy-handing-in/upload/upload.component';
import { LoginGuard } from './guard/guard.login';

const routes: Routes = [
  { path: 'utils', children:[
    {path: 'happy-handing-in', component: HappyHandingInComponent, children:[
      { path: 'upload', component: HappyHandingInUploadComponent }
    ], canActivate: [LoginGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})

export class AppRoutingModule { }

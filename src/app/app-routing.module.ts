import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HappyHandingInComponent } from './components/utils/happy-handing-in/index.component';
import { HappyHandingInUploadComponent } from './components/utils/happy-handing-in/upload/upload.component';
import { LoginGuard } from './guard/guard.login';
import { UtilsComponent } from './components/utils/utils.component';

const routes: Routes = [
  { path: 'utils', component:  UtilsComponent, children:[] },
  { path: 'utils/happy-handing-in', component: HappyHandingInComponent, children:[], canActivate: [LoginGuard] },
  { path: 'utils/happy-handing-in/upload', component: HappyHandingInUploadComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})

export class AppRoutingModule { }

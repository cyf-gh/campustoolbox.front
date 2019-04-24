import { OwnGoodsComponent } from './component/user/own-goods/own-goods.component';
import { GoodViewDetailComponent } from './component/good-view-detail/good-view-detail.component';
import { CookiePolicyDetailsComponent } from './component/cookie-policy-details/cookie-policy-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// -------- Global
import { LoginGuard } from './guard/guard.login';

// -------- Utils
import { UtilsComponent } from './component/utils/utils.component';
// ------ HHI
// --- Anyone
import { HappyHandingInComponent } from './component/utils/happy-handing-in/index.component';
import { HappyHandingInUploadComponent } from './component/utils/happy-handing-in/upload/upload.component';
// --- Admin
import { CreateWorkComponent } from './component/utils/happy-handing-in/admin/create-work/create-work.component';
import { HappyHandingInAdminGuard } from './guard/utils-hhi-admin.guard';
import { HhiAdminComponent } from './component/utils/happy-handing-in/admin/hhi-admin/hhi-admin.component';
import { HHIEditComponent } from './component/utils/happy-handing-in/admin/edit/edit.component';
import { CreatePrefixComponent } from './component/utils/happy-handing-in/admin/create-prefix/create-prefix.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { SpaceComponent } from './component/user/space/space.component';
import { IndexComponent } from './component/index/index.component';
import { GoodViewAllComponent } from './component/good-view-all/good-view-all.component';
import { GoodPublishComponent } from './component/good-publish/good-publish.component';

const routes: Routes = [
  { path: 'home', component: GoodViewAllComponent },
  { path: 'good/detail', component: GoodViewDetailComponent },
  { path: 'good/publish', component: GoodPublishComponent, canActivate: [LoginGuard] },
  { path: 'utils', component: UtilsComponent, children: [] },
  {
    path: 'utils/happy-handing-in', component: HappyHandingInComponent, children: [
      { path: 'admin', component: HhiAdminComponent, children: [] }
    ], canActivate: [LoginGuard]
  },
  { path: 'utils/happy-handing-in/upload', component: HappyHandingInUploadComponent, canActivate: [LoginGuard] },
  { path: 'utils/happy-handing-in/admin/create/work', component: CreateWorkComponent, canActivate: [HappyHandingInAdminGuard] },
  { path: 'utils/happy-handing-in/admin/create/prefix', component: CreatePrefixComponent, canActivate: [HappyHandingInAdminGuard] },
  { path: 'utils/happy-handing-in/admin/edit', component: HHIEditComponent, canActivate: [HappyHandingInAdminGuard] },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/space', component: SpaceComponent, canActivate: [LoginGuard] },
  { path: 'user/own-goods', component: OwnGoodsComponent, canActivate: [LoginGuard] },
  { path: 'policy/cookie', component: CookiePolicyDetailsComponent },
  { path: '**', component: IndexComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, HappyHandingInAdminGuard]
})

export class AppRoutingModule { }

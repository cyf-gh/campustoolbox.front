import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HappyHandingInComponent } from './Components/Utils/happy-handing-in/happy-handing-in.component';

const routes: Routes = [
  { path: 'utils/happy-handing-in', component: HappyHandingInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

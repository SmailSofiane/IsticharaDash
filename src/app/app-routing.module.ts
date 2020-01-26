import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashHomeComponent } from './dash-home';
import { AuthGuard } from './_helpers';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', component:DashHomeComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'*' ,redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

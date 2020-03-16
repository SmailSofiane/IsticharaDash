import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashHomeComponent } from './dash-home';
import { AuthGuard } from './_helpers';
import { LoginComponent } from './login/login.component';
import { WilayaSecteurComponent } from './dash-home/wilaya-secteur/wilaya-secteur.component';
import { ProjectsSecteurComponent } from './dash-home/projects-secteur/projects-secteur.component';


const routes: Routes = [
  {path:'', component:DashHomeComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'*' ,redirectTo:''},
  {path:'secteurs/:codew',component:WilayaSecteurComponent},
  {path:'projects/:codes',component:ProjectsSecteurComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

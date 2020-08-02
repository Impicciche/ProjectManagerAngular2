import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { LoggedGuardGuard } from './guards/logged-guard.guard';


const routes: Routes = [
  {path: "login", component : LoginComponent, canActivate: [LoggedGuardGuard]},
  {path: "register", component : RegisterComponent, canActivate: [LoggedGuardGuard]},
  {path: "dashboard", component : DashboardComponent, canActivate: [LoggedGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

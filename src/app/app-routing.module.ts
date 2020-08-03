import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddProjectComponent} from "./dashboard/add-project/add-project.component";
import { LoggedGuardGuard } from './guards/logged-guard.guard';
import { LimitAccessGuard } from './guards/limit-access-guard';


const routes: Routes = [
  {path: "login", component : LoginComponent, canActivate: [LoggedGuardGuard]},
  {path: "register", component : RegisterComponent, canActivate: [LimitAccessGuard]},
  {path: "dashboard", component : DashboardComponent,
  children: [
      {
        path: 'add-project', // child route path
        component: AddProjectComponent, // child route component that the router renders
      }
      ], canActivate: [LimitAccessGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuardGuard implements CanActivate {
  constructor(private ls:LoginService,private r:Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.ls.getToken() == undefined){
      // this.r.navigate(["/login"]);
      return true;
    }
    this.r.navigate(["/dashboard"]);
    return false;
  }
  
}

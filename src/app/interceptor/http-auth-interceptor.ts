import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor{
    constructor(private auth:LoginService, private router: Router){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      console.log(this.auth.getToken());

      if(this.auth.getToken()){
        req = req.clone({setHeaders: {
                Authorization: `Bearer ${this.auth.getToken().access_token}`
            }});
        
      }
      else{
          this.router.navigate(["/login"]);
      }
      return next.handle(req);
  }
}
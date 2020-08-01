import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import {Login} from 'src/app/model/login';
import {Token} from '../model/token';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url_login:string = "http://localhost:8000/api/auth/login";
  token:Token;

  constructor(private http : HttpClient) {
    
   }

   login( login:Login):Observable<Token>{
     return this.http.post<Token>(this.url_login,login);
   }
   getToken():Token{
     return this.token;
   }
   setToken(token:Token){
     this.token = token;
   }

   getHeader(){
    //  let headers:HttpHeaders = new HttpHeaders({
    //    'Bearer' : this.getToken()
    //  });
    //  let options = {headers: headers};
     
    //  return options;
   }
}

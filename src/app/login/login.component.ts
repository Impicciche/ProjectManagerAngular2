import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Login } from '../model/login';
import { FormGroup, FormControl } from '@angular/forms';
import { tokenName } from '@angular/compiler';
import { Token } from '../model/token'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginAuth:FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private ls:LoginService) { }

  ngOnInit() {
  }
  login($event){
    // $event.preventDefault();
    let login:Login = new Login();
    login.email = this.loginAuth.get('email').value;
    login.password = this.loginAuth.get('password').value;

    console.log(login);

    this.ls.login(login).subscribe((data)=>{
      let token:Token = new Token();
      token.token_access = data.token_access;
      token.token_type = data.token_type;
      token.expires_in = data.expires_in;
      this.ls.setToken(token);

      });
    return false;
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Login } from '../login';
import { FormGroup, FormControl } from '@angular/forms';

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

    this.ls.login(login).subscribe((data)=>{console.log(data);});
    return false;
  }
}

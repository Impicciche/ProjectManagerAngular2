import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string='';
  password='';

  constructor(private ls:LoginService) { }

  ngOnInit() {
  }
  login($event){
    console.log("submit");
    $event.preventDefault();
    let login:Login = new Login();
    login.username = this.username;
    login.password = this.password;

    this.ls.login(login).subscribe((data)=>{console.log(data);});
    return false;
  }
}

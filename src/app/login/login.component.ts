import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user : {
    username: string,
    pwd: string | number
  } = {username : '', pwd: ''}

  constructor (private loginService: LoginService){}

  login(){
    this.loginService.signIn(this.user).subscribe({
      next: (data) => {console.log(data)}
    })
    this.user.username = ''
    this.user.pwd = ''
  }

}

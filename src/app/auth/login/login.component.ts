import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: user = new user();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logIn() {
    this.authService.doLogin(this.user)
  }

}

import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser: boolean = false;
  showMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  doLogin(user: user) {
    if (user.userName === 'admin' && user.userPassword === 'admin') {
      this.setSession({ idToken: '', expiresIn: '7200' });
      this.authenticatedUser = true;
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/home']);
    } else {
      this.authenticatedUser = false;
      this.showMenuEmitter.emit(false);
      alert("Ops! Aconteceu um problema, tente novamente")
    }
  }

  logout() {
    this.showMenuEmitter.emit(false);
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.router.navigate(['/login']);
  }

  isAuthenticatedUser() {
    return this.authenticatedUser;
  }

  private setSession(authResult) {
    localStorage.setItem('id_token', authResult.idToken);
  }

}

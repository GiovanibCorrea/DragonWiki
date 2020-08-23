import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DragoWiki';
  showMenu: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
  }

  logout() {
    this.authService.logout();
  }

}

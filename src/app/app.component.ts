import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { AuthService } from './auth/auth.service';
import { User } from './auth/login/user';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: User;

  constructor(private loadingBar: SlimLoadingBarService, private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  private isConnected(): boolean {
    return this.authService.isConnected();
  }

  private connectedUser(): User {
    return this.authService.getConnectedUser();
  }

  private isAdmin(): boolean {
    if (!_.isEmpty(this.connectedUser())) {
      const roles = this.connectedUser().roles;
      return _.includes(roles, 'admin');
    }
    return false;
  }

  private logout(): void {
    return this.authService.logout();
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
}

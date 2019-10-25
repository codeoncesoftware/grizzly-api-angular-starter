import { Component } from '@angular/core';
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

  constructor(private authService: AuthService) {
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

}

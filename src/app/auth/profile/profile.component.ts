import { Component, OnInit } from '@angular/core';
import { User } from '../../auth/login/user';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  username: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = new User();
    this.authService.me()
      .subscribe(user => {
        this.user = user;
      });
  }

  update() {
    this.authService.updateUser(this.user)
      .subscribe(res => {

      });
  }

}

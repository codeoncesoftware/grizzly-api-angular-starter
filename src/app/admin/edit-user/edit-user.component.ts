import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/login/user';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: User;
  username: string;

  constructor(private authService: AuthService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.username = params.username;
    });
  }

  ngOnInit() {
    this.user = new User();
    this.authService.getUser(this.username)
      .subscribe(user => {

      });
  }

}

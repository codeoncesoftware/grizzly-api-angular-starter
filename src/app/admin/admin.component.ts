import { Component, OnInit } from '@angular/core';
import { User } from '../auth/login/user';
import { AuthService } from '../auth/auth.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'username', 'email', 'enabled', 'actions'];
  dataSource: User[];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getAllUsers()
      .subscribe(users => {
        this.dataSource = users;
      });
  }

  editUser() {
    this.router.navigate(['edit-user']);
  }

  deleteUser(username) {
    this.authService.deleteUser(username)
      .subscribe(res => {
        this.dataSource = _.filter(this.dataSource, u => u.username !== username);
      });
  }

}

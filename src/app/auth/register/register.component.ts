import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../login/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.user = new User();
  }

  signup(): void {
    this.authService.signup(this.user).subscribe(res => {
      this.router.navigate(['login']);
    });
  }
}

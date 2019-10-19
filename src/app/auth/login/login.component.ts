
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(): void {
    const token = 'token';

    this.authService.signIn(this.username, this.password).subscribe(res => {
      if (res[token]) {
        // Save Token in localStorage to inject in further HTTP Requests
        localStorage.setItem('grizzly-token', 'Bearer ' + res[token]);
        console.log(res[token]);
        this.router.navigate(['home']);
      }
    });
  }
}


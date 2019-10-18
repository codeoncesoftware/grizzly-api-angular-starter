import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    endpoint = environment.grizzlyUrl;

    constructor(private http: HttpClient, private router: Router) { }

    signIn(username, password) {
        const obj = {
            username,
            password
        };
        return this.http.post(this.endpoint + '/signin', obj);
    }

    logout() {
        localStorage.removeItem('grizzly-token');
        this.router.navigate(['/login']);
    }

}

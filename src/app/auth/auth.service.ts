import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import * as _ from 'lodash';
import { User } from './login/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    connectedUser: User;

    constructor(private http: HttpClient, private router: Router) { }

    endpoint = environment.grizzlyUrl;

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.endpoint + '/allusers');
    }

    isConnected(): boolean {
        return !_.isEmpty(localStorage.getItem('grizzly-token'));
    }

    signIn(username: string, password: string) {
        return this.http.post(this.endpoint + '/signin', {
            username,
            password
        });
    }

    logout() {
        localStorage.removeItem('grizzly-token');
        this.router.navigate(['/login']);
    }

    signup(user: User) {
        return this.http.post(this.endpoint + '/signup', user);
    }

    deleteUser(username: string) {
        return this.http.delete(this.endpoint + '/deleteuser', {
            params: { username }
        });
    }

    getUser(username: string): Observable<User> {
        return this.http.get<User>(this.endpoint + '/user', {
            params: { username }
        });
    }

    me(): Observable<User> {
        return this.http.get<User>(this.endpoint + '/me');
    }

    getConnectedUser(): User {
        return this.connectedUser;
    }

    setConnectedUser(user: User): void {
        this.connectedUser = user;
    }

    activateUser(username: string): Observable<any> {
        return this.http.post(this.endpoint + '/activate', {}, {
            params: { username }
        });
    }

    updateUser(user: User) {
        return this.http.put(this.endpoint + '/updateuser', user, {
            params: { username: user.username }
        });
    }

}

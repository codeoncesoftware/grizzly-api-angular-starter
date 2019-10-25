import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class HttpGlobalInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Set token in HTTP request if it exists
        if (localStorage.getItem('grizzly-token')) {
            request = request.clone({
                headers: request.headers.set('Authorization', localStorage.getItem('grizzly-token'))
            });
        }

        return next.handle(request);

    }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  constructor(private route: Router) { }

  // we modify the request and add token to our header
  // we also need to provide intercepter to our app.module provider
  // we have a login on backend in which we split after space so bearer should have space after it otherwise not work
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token') || ''
    request = request.clone({ headers: request.headers.set('Authorization', 'bearer ' + token) })
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('error' + error.error.message)
        if (error.error.message ==='Unauthenticated.') {
          localStorage.removeItem('token')
          localStorage.removeItem('userType')
          alert('Session is expired please login again')
          this.route.navigateByUrl('/login')
        }
        return throwError(() => error);
      })
    );
  }
}

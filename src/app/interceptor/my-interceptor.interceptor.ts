import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  // we modify the request and add token to our header
  // we also need to provide intercepter to our app.module provider
  // we have a login on backend in which we split after space so bearer should have space after it otherwise not work
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token') || ''
    request = request.clone({ headers: request.headers.set('Authorization', 'bearer ' + token) })
    return next.handle(request);
  }
}

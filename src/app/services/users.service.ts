import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import httpclient 
import { Observable } from 'rxjs';
import { Users, LoginUser, LoginResponse } from '../interface/users';
import { environment } from 'src/environments/environment.development';
@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) { }
    apiUrl = environment.url

    // create User
    createUser(User: Users): Observable<Users[]> {
        return this.http.post<Users[]>(`${this.apiUrl}/api/user`, User)
    }
    // login User
    loginUser(User: LoginUser): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.apiUrl}/api/user/login`, User)
    }
}

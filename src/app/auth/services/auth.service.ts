import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginCredentials, LoginResponse } from '../types/auth.type';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private readonly httpClient: HttpClient) {}

    login(loginCredentials: LoginCredentials): Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>(environment.baseUrl + '/api/v1/token', loginCredentials);
    }

    // logout(token: string) {
    //     return this.httpClient.post('api/apigw/auth/logout', token);
    // }

    // verifyToken(): Observable<boolean> {
    //     return this.httpClient.get<boolean>('api/apigw/verifytoken');
    // }
}

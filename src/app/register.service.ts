import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Register } from './register.model';

@Injectable({providedIn: 'root'})
export class RegisterService {
    constructor(private http: HttpClient) {}
    
    registerRequest(userName: string, password: string, email: string) {
        const postData: Register = {userName: userName, password: password, email: email}
        this.http
        .post<{name: string}>('http://localhost:3000/register', postData)
        .subscribe(response => {
            console.log(response);
        });
    }

}
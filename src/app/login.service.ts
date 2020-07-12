import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Login } from './login.model'

@Injectable({providedIn: 'root'})
export class LoginService {
    constructor(private http: HttpClient) {}
    
    loginPostReq(userName: string, password: string) {
    const postData: Login = {userName: userName, password: password}
     this.http
     .post<{name: string}>(
       'http://localhost:3000/signin',
       postData
     )
     .subscribe(response => {
       console.log(response);
       //check if the status code and if 200 redirect to Home  
     });
    }

}
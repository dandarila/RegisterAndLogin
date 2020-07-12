import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Login } from './../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http: HttpClient, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogin(postData: Login) {
    this.loginService.loginPostReq(postData.userName, postData.password);
   
  }

  onSubmit(form: NgForm) {
    console.log(form.value.userName)
    console.log(form.value.password)
    
  }

}

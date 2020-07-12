import { RegisterService } from './../register.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Register } from './../register.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value.email)
  }

  onRegister(postData: Register) {
    this.registerService.registerRequest(postData.userName, postData.password, postData.email);
   
  }


}




  


 




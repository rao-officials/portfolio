import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { signUpusers } from 'src/app/data'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  constructor(private router:Router) { }


  
  loginValues: any;
  loginUsers = [];
  objToArray: any


  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rememberme: new FormControl(''),
  });


  submit() {
    // debugger
    this.loginValues = this.loginForm.value;

    console.log(this.loginValues)
    console.log(signUpusers)


    for (let i = 0; i < signUpusers.length; i++) {


      if (this.loginValues.email === signUpusers[i].email && this.loginValues.password === signUpusers[i].password) {
        console.log('login')
       this.router.navigate(['signUp'])

      }

    }



  }

  ngOnInit() {



    console.log(signUpusers)
  }


}

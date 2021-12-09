import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { signUpusers } from 'src/app/data'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  signUpValues: any
  signUpUsers = [];

  signUpForm = new FormGroup({
    email: new FormControl(''),
    passsword: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    school: new FormControl(''),
    rollNo: new FormControl(''),
  });


  submit() {
    console.log(this.signUpForm.value)
    signUpusers.push(this.signUpForm.value);
    console.log(signUpusers);







  }

  constructor() { }

  ngOnInit() {

    console.log(signUpusers)
  }

}

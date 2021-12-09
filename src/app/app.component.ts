import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component } from '@angular/core';
import Typed from 'typed.js';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  

  name = "Haseeb Rao"
    designation = 'Frontend Developer';

  collapse: boolean = true;
  navbarCollpase() {

    console.log('in function')
    this.collapse = false;


  }


  menus = ['Home', 'About', 'Resume', 'Portfolio', 'Services', 'Contact']


  ngOnInit() {

    var typed = new Typed(".element", {
      strings: ["Frontend Developer","UI Developer", "Web Designer"],
      typeSpeed: 100,
      backDelay: 3000,
      backSpeed: 50,
      loop: true,
    });


    









    // let numbers = 10;

    // while (numbers > 0) {
    //   console.log(numbers)
    //   numbers = numbers - 1;
    // }





    // let price = 25;
    // let message = (price < 10) ? 'Expensive' : 'Cheap';
    // console.log(message)


    // console.log(this.studentData);

    // let books = 5;
    // let nTs = books.toString()
    // console.log(typeof nTs)
    // console.log(this.checkPalindromeString('OkO'));
    // console.log(this.checkFactorialNo(5));


    // let number = 5
    // let seccondNO = '5'

    // console.log(number + seccondNO)


    // let number = 1

    // number = number + 10

    // console.log(number)




  }

  getRandomNUmber(min, max) {

    return Math.round(Math.random() * (max - min) + min);

  }



  //   checkPalindromeString(string) {


  //     length = string.length;


  //     for (let i = 0; i < length / 2; i++) {

  //       let forward = string[i]
  //       let backword = length


  //       if (forward != backword) {

  //         return false;
  //       }

  //       else{
  //         return true
  //       }
  //     }


  //     return length;
  // }



  checkPalindromeString(str) {

    var len = str.length;
    var mid = Math.floor(len / 2);

    for (var i = 0; i < mid; i++) {

      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }

    return true;
  }


  // checkFactorialNo(no) {

  //   while (1) {
  //     let previousNo = no - 1
  //     let finalNo = no * previousNo
  //   }
  //   return this.finalNo;

  // }






}

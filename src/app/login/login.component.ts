import { Component, OnInit  } from '@angular/core';
import { AccountService } from '../services/account.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email           :any;
  password        :any;
  regex           =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  emailError      :any;
  passwordError   :any;
  loginEvent      :any;


  constructor(public router : Router, public snackBar: MatSnackBar,public account : AccountService) {


   }

  ngOnInit() {

  }
  signin(){
    let emailValidation = false;
    let passwordValidation = false;
      if(!this.regex.test(this.email)){
        this.emailError ="Invaild email address"
         emailValidation = false;
      }else{
        emailValidation = true;
      }
        if(!this.password){
          this.passwordError = "Please enter password";
          passwordValidation = false;
        }else{
          passwordValidation =true;
        }


        if(emailValidation == false && passwordValidation == true)
            this.passwordError = "";
        if(emailValidation == true && passwordValidation == false)
            this.emailError = "";
        if(emailValidation == true && passwordValidation == false)
            this.emailError = "";
        if(emailValidation == true && passwordValidation ==true){
            this.emailError ="";
            this.passwordError ="";
            console.log(this.account.signin(this.email,this.password))
          }

  }
  checkEmail(){
    if(!this.regex.test(this.email)){
      this.emailError ="Invaild email address"
    }else{
      this.emailError =""
    }
  }

  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  navigate(location : string){

    if(location == "home")
        this.router.navigate(["/welcome"])
    if(location == "sign_up")
        this.router.navigate(["/users/sign_up"])

  }

}


//
// let emailValidation = false;
// let passwordValidation = false;
//   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if(!re.test(this.email)){
//     this.emailError ="Invaild email address"
//      emailValidation = false;
//   }else{
//     emailValidation = true;
//   }
//     if(this.password){
//         if(this.password.length <= 5){
//           this.passwordError ="Password too short";
//           passwordValidation = false;
//         }
//         else if(this.password.length >= 25){
//           this.passwordError ="Password too long";
//           passwordValidation = false;
//         }else{
//           passwordValidation = true;
//         }
//       }
//       else{
//         this.passwordError = "Please enter password";
//         passwordValidation = false;
//       }
//
//     if(emailValidation == false && passwordValidation == true)
//         this.passwordError = "";
//     if(emailValidation == true && passwordValidation == false)
//         this.emailError = "";
//     if(emailValidation == true && passwordValidation == false)
//         this.emailError = "";
//     if(emailValidation == true && passwordValidation ==true){
//         this.emailError ="";
//         this.passwordError ="";
//         this.account.signin(this.email,this.password);
//       }
//
